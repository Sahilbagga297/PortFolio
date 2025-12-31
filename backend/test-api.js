const fetch = require('node-fetch');

const testContactAPI = async () => {
    const testData = {
        username: "John Doe",
        email: "john@example.com",
        phonenumber: "+1234567890",
        gender: "male"
    };

    try {
        console.log('🧪 Testing Contact API...\n');
        
        // Test POST /api/contact
        console.log('📤 Sending test contact form...');
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            console.log('✅ Contact form submitted successfully!');
            console.log('📊 Response:', JSON.stringify(result, null, 2));
        } else {
            console.log('❌ Contact form submission failed:');
            console.log('📊 Response:', JSON.stringify(result, null, 2));
        }
        
        // Test GET /api/health
        console.log('\n🏥 Testing health endpoint...');
        const healthResponse = await fetch('http://localhost:5000/api/health');
        const healthResult = await healthResponse.json();
        
        if (healthResult.success) {
            console.log('✅ Health check passed!');
            console.log('📊 Response:', JSON.stringify(healthResult, null, 2));
        } else {
            console.log('❌ Health check failed!');
        }
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        console.log('\n💡 Make sure:');
        console.log('1. Backend server is running (npm run dev)');
        console.log('2. MongoDB is connected');
        console.log('3. Server is accessible at http://localhost:5000');
    }
};

// Run the test
testContactAPI(); 