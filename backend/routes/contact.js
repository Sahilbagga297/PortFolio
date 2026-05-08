const express = require('express');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
const router = express.Router();

// Create reusable transporter using Gmail SMTP
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Gmail App Password (not your real password)
        },
    });
};

// Send email notification to you
const sendEmailNotification = async (contactData) => {
    const { username, email, phonenumber, message } = contactData;

    const transporter = createTransporter();

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `📩 New Contact Form Submission from ${username}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 12px;">
                <h2 style="color: #1a1a1a; border-bottom: 2px solid #ddd; padding-bottom: 12px;">
                    New Contact Form Submission
                </h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #555; width: 140px;">👤 Full Name:</td>
                        <td style="padding: 10px 0; color: #222;">${username}</td>
                    </tr>
                    <tr style="background: #f0f0f0;">
                        <td style="padding: 10px; font-weight: bold; color: #555;">📧 Email:</td>
                        <td style="padding: 10px; color: #222;">
                            <a href="mailto:${email}" style="color: #4f46e5;">${email}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #555;">📞 Phone:</td>
                        <td style="padding: 10px 0; color: #222;">${phonenumber}</td>
                    </tr>
                    <tr style="background: #f0f0f0;">
                        <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">💬 Message:</td>
                        <td style="padding: 10px; color: #222; white-space: pre-wrap;">${message}</td>
                    </tr>
                </table>
                <p style="margin-top: 24px; font-size: 12px; color: #999;">
                    Sent from your Portfolio Contact Form • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                </p>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
};

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
    try {
        const { username, email, phonenumber, message } = req.body;

        // Basic validation
        if (!username || !email || !phonenumber || !message) {
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

        // Create new contact and save to MongoDB
        const newContact = new Contact({
            username,
            email,
            phonenumber,
            message
        });

        await newContact.save();

        // Send email notification (non-blocking — won't fail the request if email fails)
        try {
            await sendEmailNotification({ username, email, phonenumber, message });
            console.log(`📧 Email notification sent for contact: ${email}`);
        } catch (emailError) {
            console.error('Email notification failed (contact still saved):', emailError.message);
        }

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully!',
            data: {
                id: newContact._id,
                username: newContact.username,
                email: newContact.email,
                phonenumber: newContact.phonenumber,
                message: newContact.message,
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