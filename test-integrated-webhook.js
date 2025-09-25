import axios from 'axios';

const PRODUCTION_URL = 'https://hacktilldawn-website.vercel.app';

// Test data simulating WhatsApp webhook payload
const testWebhookPayload = {
    type: 'message',
    chat_id: '120363123456789012@g.us',
    chat_name: 'HackTillDawn Final Participants',
    from_name: 'Integrated Test User',
    sender: '1234567890@s.whatsapp.net',
    text: {
        body: `Name: Integrated Test Project
Description: This is a test project sent to the integrated webhook to verify everything is working correctly with the integrated deployment.
URL: https://github.com/integrated/test-project`
    }
};

async function testIntegratedWebhook() {
    console.log('🚀 Testing Integrated Webhook Handler\n');
    console.log(`Target URL: ${PRODUCTION_URL}/api/webhook\n`);
    
    try {
        // Test 1: Health check
        console.log('1️⃣ Testing health endpoint...');
        const healthResponse = await axios.get(`${PRODUCTION_URL}/api/health`);
        console.log('✅ Health check passed:', healthResponse.data);
        
        // Test 2: Send webhook message
        console.log('\n2️⃣ Testing webhook with project message...');
        const webhookResponse = await axios.post(`${PRODUCTION_URL}/api/webhook`, testWebhookPayload);
        console.log('✅ Webhook test passed:', webhookResponse.status);
        
        // Test 3: Check projects API
        console.log('\n3️⃣ Testing projects API...');
        const projectsResponse = await axios.get(`${PRODUCTION_URL}/api/projects`);
        console.log('✅ Projects API test passed');
        console.log('📊 Total projects:', projectsResponse.data.totalCount);
        
        if (projectsResponse.data.projects.length > 0) {
            console.log('📋 Latest project:', projectsResponse.data.projects[0].name);
        }
        
        console.log('\n🎉 Integrated webhook tests completed successfully!');
        console.log('🔗 Your webhook is ready to receive messages from Whapi.cloud');
        console.log(`📡 Webhook URL: ${PRODUCTION_URL}/api/webhook`);
        console.log(`📊 Projects API: ${PRODUCTION_URL}/api/projects`);
        
    } catch (error) {
        console.error('❌ Integrated test failed:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
    }
}

// Run the test
testIntegratedWebhook();
