const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
    try {
        const { username, email, phonenumber, gender } = req.body;

        // Basic validation
        if (!username || !email || !phonenumber || !gender) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Check if contact with this email already exists
        const existingContact = await Contact.findOne({ email: email.toLowerCase() });
        if (existingContact) {
            return res.status(400).json({
                success: false,
                message: 'A contact with this email already exists'
            });
        }

        // Create new contact
        const newContact = new Contact({
            username,
            email,
            phonenumber,
            gender
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully!',
            data: {
                id: newContact._id,
                username: newContact.username,
                email: newContact.email,
                phonenumber: newContact.phonenumber,
                gender: newContact.gender,
                createdAt: newContact.createdAt
            }
        });

    } catch (error) {
        console.error('Contact submission error:', error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: validationErrors
            });
        }

        res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.'
        });
    }
});

// GET /api/contact - Get all contacts (for admin purposes)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find({})
            .select('-__v')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });

    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// GET /api/contact/:id - Get specific contact
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id).select('-__v');
        
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            success: true,
            data: contact
        });

    } catch (error) {
        console.error('Get contact error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

module.exports = router; 