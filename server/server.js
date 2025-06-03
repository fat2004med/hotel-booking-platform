const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/database');
const { createClerkClient } = require('@clerk/express');
const connectCloudinary = require('./config/cloudinary');
const clerkWebhooks = require('./controllers/clerkWebhooks');
const bookingRouter = require('./routes/bookingRoutes');
const roomRouter = require('./routes/roomRoutes');
const userRouter = require('./routes/userRoutes');
const hotelRouter = require('./routes/hotelRoutes');

// Initialize connections
connectDB();
connectCloudinary();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Initialize Clerk
const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY
});

// Proper Clerk middleware implementation
const clerkMiddleware = async (req, res, next) => {
  try {
    const authState = await clerk.authenticateRequest(req);
    req.auth = authState;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Routes
app.post('/api/clerk/webhook', clerkWebhooks); // No auth needed for webhooks
app.use('/api/rooms', roomRouter);
app.use('/api/hotels', clerkMiddleware, hotelRouter); // Protected routes
app.use('/api/bookings', clerkMiddleware, bookingRouter);
app.use('/api/user', clerkMiddleware, userRouter);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`
  Server running on port ${PORT}
  Cloudinary connected successfully!
  Clerk authentication initialized!
  `);
});