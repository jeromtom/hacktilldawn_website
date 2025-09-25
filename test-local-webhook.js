import axios from 'axios';

const LOCAL_URL = 'http://localhost:3001';

// Test data simulating WhatsApp webhook payload
const testWebhookPayload = {
    type: 'message',
    chat_id: '120363123456789012@g.us',
    chat_name: 'HackTillDawn Final Participants',
    from_name: 'Local Test User',
    sender: '1234567890@s.whatsapp.net',
    text: {
        body: `Name: Local Test Project
Description: This is a test project sent to the local webhook to verify everything is working correctly with the local development setup.
URL: https://github.com/local/test-project`
    }
};

const testInvalidPayload = {
    type: 'message',
    chat_id: '120363123456789012@g.us',
    chat_name: 'HackTillDawn Final Participants',
    from_name: 'Invalid Test User',
    sender: '1234567891@s.whatsapp.net',
    text: {
        body: 'This is just a regular message without the required format'
    }
};

const testOtherGroupPayload = {
    type: 'message',
    chat_id: '120363123456789013@g.us',
    chat_name: 'Some Other Group',
    from_name: 'Other Group User',
    sender: '1234567892@s.whatsapp.net',
    text: {
        body: 'Name: Other Group Project\nDescription: This should be ignored\nURL: https://example.com'
    }
};

async function testLocalWebhook() {
    console.log('🧪 Testing Local Webhook Handler\n');
    console.log(`Target URL: ${LOCAL_URL}/api/webhook\n`);
    
    try {
        // Test 1: Health check
        console.log('1️⃣ Testing health endpoint...');
        const healthResponse = await axios.get(`${LOCAL_URL}/api/health`);
        console.log('✅ Health check passed:', healthResponse.data);
        
        // Test 2: Valid project message
        console.log('\n2️⃣ Testing valid project message...');
        const response1 = await axios.post(`${LOCAL_URL}/api/webhook`, testWebhookPayload);
        console.log('✅ Valid message test passed:', response1.status);
        
        // Test 3: Invalid message format
        console.log('\n3️⃣ Testing invalid message format...');
        const response2 = await axios.post(`${LOCAL_URL}/api/webhook`, testInvalidPayload);
        console.log('✅ Invalid message test passed:', response2.status);
        
        // Test 4: Message from other group
        console.log('\n4️⃣ Testing message from other group...');
        const response3 = await axios.post(`${LOCAL_URL}/api/webhook`, testOtherGroupPayload);
        console.log('✅ Other group message test passed:', response3.status);
        
        // Test 5: Check projects API
        console.log('\n5️⃣ Testing projects API...');
        const projectsResponse = await axios.get(`${LOCAL_URL}/api/projects`);
        console.log('✅ Projects API test passed:', projectsResponse.data);
        
        // Test 6: Test project endpoint
        console.log('\n6️⃣ Testing manual project addition...');
        const testProject = {
            name: 'Manual Local Test',
            description: 'This project was added via local API',
            url: 'https://github.com/local/manual-test'
        };
        const testResponse = await axios.post(`${LOCAL_URL}/api/test-project`, testProject);
        console.log('✅ Manual project test passed:', testResponse.data);
        
        // Final check
        console.log('\n7️⃣ Final projects check...');
        const finalProjectsResponse = await axios.get(`${LOCAL_URL}/api/projects`);
        console.log('📊 Total projects:', finalProjectsResponse.data.totalCount);
        console.log('📋 Projects:', JSON.stringify(finalProjectsResponse.data.projects, null, 2));
        
        console.log('\n🎉 All local tests completed successfully!');
        console.log('🌐 Your local webhook is ready at:', `${LOCAL_URL}/api/webhook`);
        
    } catch (error) {
        console.error('❌ Local test failed:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
        console.log('\n💡 Make sure the local server is running:');
        console.log('   npm run dev:local');
    }
}

// Run the test
testLocalWebhook();
