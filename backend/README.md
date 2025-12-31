# Portfolio Backend API

A Node.js/Express backend API for handling contact form submissions from your portfolio website.

## Features

- ✅ Contact form data storage in MongoDB
- ✅ Input validation and sanitization
- ✅ Rate limiting for API protection
- ✅ CORS configuration for frontend integration
- ✅ Error handling middleware
- ✅ Security headers with Helmet
- ✅ Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `config.env` and modify the MongoDB URI if needed
   - For MongoDB Atlas, replace the URI with your connection string

4. Start MongoDB (if using local installation):
```bash
# On Windows
mongod

# On macOS/Linux
sudo systemctl start mongod
```

## Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact
Submit a contact form

**Request Body:**
```json
{
  "username": "John Doe",
  "email": "john@example.com",
  "phonenumber": "+1234567890",
  "gender": "male"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully!",
  "data": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "username": "John Doe",
    "email": "john@example.com",
    "phonenumber": "+1234567890",
    "gender": "male",
    "createdAt": "2023-09-06T10:30:00.000Z"
  }
}
```

### GET /api/contact
Get all contact submissions (for admin purposes)

### GET /api/contact/:id
Get a specific contact by ID

### GET /api/health
Health check endpoint

## Environment Variables

Create a `config.env` file with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_contacts
NODE_ENV=development
```

## Database Schema

The Contact model includes:
- `username` (String, required)
- `email` (String, required, unique)
- `phonenumber` (String, required)
- `gender` (String, required, enum)
- `createdAt` (Date, auto-generated)
- `updatedAt` (Date, auto-generated)

## Security Features

- Rate limiting (100 requests per 15 minutes per IP)
- CORS protection
- Input validation and sanitization
- Security headers with Helmet
- Error handling for malformed requests

## Frontend Integration

Update your React contact form to send data to the backend:

```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('Contact form submitted successfully!');
            // Reset form
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit form. Please try again.');
    }
};
```

## Troubleshooting

1. **MongoDB Connection Error**: Ensure MongoDB is running and the connection string is correct
2. **CORS Error**: Check that the frontend URL is included in the CORS configuration
3. **Port Already in Use**: Change the PORT in config.env or kill the process using the port

## License

MIT 