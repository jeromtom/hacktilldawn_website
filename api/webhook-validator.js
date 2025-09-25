import crypto from 'crypto';

/**
 * Validates webhook signature for security
 * @param {string} payload - Raw request body
 * @param {string} signature - Signature from headers
 * @param {string} secret - Webhook secret
 * @returns {boolean} - Whether signature is valid
 */
export function validateWebhookSignature(payload, signature, secret) {
    if (!signature || !secret) {
        console.warn('Missing signature or secret for webhook validation');
        return false;
    }

    try {
        // Remove 'sha256=' prefix if present
        const cleanSignature = signature.replace('sha256=', '');
        
        // Create HMAC hash
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(payload, 'utf8')
            .digest('hex');

        // Compare signatures using timing-safe comparison
        return crypto.timingSafeEqual(
            Buffer.from(cleanSignature, 'hex'),
            Buffer.from(expectedSignature, 'hex')
        );
    } catch (error) {
        console.error('Error validating webhook signature:', error);
        return false;
    }
}

/**
 * Middleware to validate webhook requests
 * @param {string} secret - Webhook secret from environment
 * @returns {Function} - Express middleware function
 */
export function webhookValidationMiddleware(secret) {
    return (req, res, next) => {
        const signature = req.headers['x-whapi-signature'] || req.headers['x-hub-signature-256'];
        
        if (!signature) {
            console.warn('Missing webhook signature in request');
            return res.status(401).json({ error: 'Missing signature' });
        }

        // Get raw body for signature validation
        const rawBody = JSON.stringify(req.body);
        
        if (!validateWebhookSignature(rawBody, signature, secret)) {
            console.warn('Invalid webhook signature');
            return res.status(401).json({ error: 'Invalid signature' });
        }

        next();
    };
}
