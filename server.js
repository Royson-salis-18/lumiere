const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// SECURITY MIDDLEWARE
// ==========================================

// 1. Helmet: Helps secure Express apps by setting various HTTP headers.
// It protects against some well-known web vulnerabilities.
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
            scriptSrc: ["'self'", "'unsafe-inline'"]
        }
    }
}));

// 2. CORS: Cross-Origin Resource Sharing.
// Restricts which domains can access your API. Since this serves the frontend directly,
// we just allow basic cross-origin requests, but in production, you'd specify your domain.
app.use(cors());

// 3. Rate Limiting: Prevents brute-force attacks and DDoS by limiting the number 
// of requests from a single IP within a timeframe.
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'Too many requests from this IP, please try again after 15 minutes',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// Parse JSON bodies
app.use(express.json());

// ==========================================
// ROUTES & STATIC FILES
// ==========================================

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock Data Generation for 100 Collections
const mockCollections = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Collection Element ${i + 1}`,
    description: `Exquisite design piece #${i + 1} from our premium lineup.`,
    imageUrl: `https://loremflickr.com/800/800/jewelry,luxury?lock=${i + 1}`,
    price: `$${(Math.random() * 5000 + 500).toFixed(2)}`
}));

// Paginated API Endpoint for Collections
app.get('/api/collections', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    
    if (endIndex < mockCollections.length) {
        results.next = { page: page + 1, limit: limit };
    }
    
    if (startIndex > 0) {
        results.previous = { page: page - 1, limit: limit };
    }

    results.results = mockCollections.slice(startIndex, endIndex);
    results.total = mockCollections.length;

    res.json(results);
});

// Example API endpoint for a contact form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    console.log(`Received contact from ${name} (${email}): ${message}`);
    res.status(200).json({ success: true, message: 'Message received successfully.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Secure server running on http://localhost:${PORT}`);
});
