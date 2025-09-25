#!/usr/bin/env node

/**
 * Setup script for enabling real data from WhatsApp webhook
 * This script helps configure the environment and test the webhook setup
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Setting up real data integration...\n');

// 1. Create .env.local file if it doesn't exist
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
    const envContent = `# WhatsApp API Configuration
WHAPI_TOKEN=FDGDimYWgfPCrzNJoFNB84r9IUyggia6
WHAPI_WEBHOOK_SECRET=df8a7e013c5e90fefee7762f4f161c93fe07181d38325999ac845bbc0e90ea37

# Application Configuration
NODE_ENV=development
PORT=3000
CORS_ORIGIN=http://localhost:3000
`;
    
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Created .env.local file with environment variables');
} else {
    console.log('✅ .env.local file already exists');
}

// 2. Check if webhook is properly configured
console.log('\n📡 Webhook Configuration:');
console.log('   Webhook URL: https://hacktilldawn-website.vercel.app/api/webhook');
console.log('   Target Group: HackTillDawn Final Participants');
console.log('   Events: messages (POST)');

// 3. Display webhook setup command
console.log('\n🔧 To configure the webhook with Whapi.Cloud, run this command:');
console.log(`
curl --request PATCH \\
     --url https://gate.whapi.cloud/settings \\
     --header 'accept: application/json' \\
     --header 'authorization: Bearer FDGDimYWgfPCrzNJoFNB84r9IUyggia6' \\
     --header 'content-type: application/json' \\
     --data '{
       "webhooks": [
         {
           "events": [
             {
               "type": "messages",
               "method": "post"
             }
           ],
           "mode": "body",
           "headers": {
             "X-Webhook-Secret": "df8a7e013c5e90fefee7762f4f161c93fe07181d38325999ac845bbc0e90ea37"
           },
           "url": "https://hacktilldawn-website.vercel.app/api/webhook"
         }
       ]
     }'
`);

// 4. Test data structure
console.log('\n📊 Data Structure Status:');
const projectsPath = path.join(__dirname, 'data', 'projects.json');
if (fs.existsSync(projectsPath)) {
    const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
    console.log(`   Real projects: ${projects.length}`);
    if (projects.length > 0) {
        console.log(`   Latest project: ${projects[0].name}`);
        console.log(`   Latest timestamp: ${projects[0].timestamp}`);
    }
} else {
    console.log('   No real projects data yet');
}

const samplePath = path.join(__dirname, 'data', 'sample', 'sample-projects.js');
if (fs.existsSync(samplePath)) {
    console.log('   Sample data: Available');
} else {
    console.log('   Sample data: Missing');
}

// 5. API endpoints
console.log('\n🌐 API Endpoints:');
console.log('   GET /api/projects - Main projects endpoint (auto-detects sample vs real)');
console.log('   GET /api/projects?sample=true - Force sample data');
console.log('   POST /api/webhook - WhatsApp webhook endpoint');
console.log('   GET /api/health - Health check');

// 6. Next steps
console.log('\n🎯 Next Steps:');
console.log('   1. Run: npm run dev (to start local development)');
console.log('   2. Configure webhook with the curl command above');
console.log('   3. Send a test message to the WhatsApp group');
console.log('   4. Check /api/projects to see real data');
console.log('   5. Deploy to Vercel for production');

console.log('\n✨ Real data integration setup complete!');
