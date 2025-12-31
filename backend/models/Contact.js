const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    phonenumber: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: {
            values: ['male', 'female', 'other', 'prefer-not-to-say'],
            message: 'Please select a valid gender option'
        }
    }
}, {
    timestamps: true
});

// Create index for better query performance
contactSchema.index({ email: 1 });
contactSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Contact', contactSchema); 