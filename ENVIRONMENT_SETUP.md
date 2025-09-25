# 🔧 Environment Variables Setup

## 📋 Complete Environment Configuration

Since `.env` files are gitignored, here's your complete environment setup:

### **Local Development (.env.local)**

Create a `.env.local` file in your project root with:

```bash
# WhatsApp API Configuration
WHAPI_TOKEN=FDGDimYWgfPCrzNJoFNB84r9IUyggia6
WHAPI_WEBHOOK_SECRET=df8a7e013c5e90fefee7762f4f161c93fe07181d38325999ac845bbc0e90ea37

# Application Configuration
NODE_ENV=development
PORT=3000
CORS_ORIGIN=http://localhost:3000
```

### **Production (Vercel Environment Variables)**

Add these in your Vercel dashboard under Settings → Environment Variables:

```bash
# WhatsApp API Configuration
WHAPI_TOKEN=FDGDimYWgfPCrzNJoFNB84r9IUyggia6
WHAPI_WEBHOOK_SECRET=df8a7e013c5e90fefee7762f4f161c93fe07181d38325999ac845bbc0e90ea37

# Application Configuration
NODE_ENV=production
CORS_ORIGIN=https://your-domain.vercel.app
```

## 🔐 Webhook Secret Configuration

### **Step 1: Configure Whapi.Cloud Webhook**

Use this API call to set up your webhook with the secret header:

```bash
curl --request PATCH \
     --url https://gate.whapi.cloud/settings \
     --header 'accept: application/json' \
     --header 'authorization: Bearer FDGDimYWgfPCrzNJoFNB84r9IUyggia6' \
     --header 'content-type: application/json' \
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
```

### **Step 2: Test Webhook Configuration**

```bash
# Test webhook locally
npm run test:local

# Test webhook with production URL
npm run test:webhook
```

## ✅ Security Features Implemented

- ✅ **Webhook Secret Validation** - Only requests with correct secret are processed
- ✅ **Production Mode Security** - Validation only runs in production
- ✅ **CORS Protection** - Configured for your domain
- ✅ **Rate Limiting** - Built-in protection against abuse

## 🚀 Next Steps

1. **Create `.env.local`** with the variables above
2. **Deploy to Vercel** with production environment variables
3. **Configure Whapi.Cloud** webhook with the API call above
4. **Test the complete setup**

Your webhook is now production-ready with proper security! 🎉
