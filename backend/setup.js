const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Portfolio Backend...\n');

// Check if config.env exists
const configPath = path.join(__dirname, 'config.env');
if (!fs.existsSync(configPath)) {
    console.log('❌ config.env file not found!');
    console.log('Please create a config.env file with the following content:');
    console.log('PORT=5000');
    console.log('MONGODB_URI=mongodb://localhost:27017/portfolio_contacts');
    console.log('NODE_ENV=development');
    process.exit(1);
}

console.log('✅ Configuration file found');

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
    console.log('📦 Installing dependencies...');
    console.log('Run: npm install');
} else {
    console.log('✅ Dependencies already installed');
}

console.log('\n📋 Setup Instructions:');
console.log('1. Make sure MongoDB is running');
console.log('2. Run: npm install (if not already done)');
console.log('3. Run: npm run dev');
console.log('4. Your API will be available at http://localhost:5000');
console.log('5. Test the health endpoint: http://localhost:5000/api/health');

console.log('\n🔗 API Endpoints:');
console.log('- POST /api/contact - Submit contact form');
console.log('- GET /api/contact - Get all contacts');
console.log('- GET /api/contact/:id - Get specific contact');
console.log('- GET /api/health - Health check');

console.log('\n🎯 Next Steps:');
console.log('1. Start your React frontend');
console.log('2. Fill out the contact form');
console.log('3. Check MongoDB to see saved data');

console.log('\n✨ Setup complete!'); 