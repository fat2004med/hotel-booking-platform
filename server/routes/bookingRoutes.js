const express = require('express');
const bookingRouter = express.Router();
const {
  checkAvailabilityAPI,
  createBooking,
  getUserBookings,
  getHotelBookings
} = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

// Test route to verify setup
bookingRouter.get('/test', (req, res) => res.send('Booking system working!'));

// Public route
bookingRouter.post('/check-availability', checkAvailabilityAPI);

// Protected routes
bookingRouter.post('/book', protect , createBooking);
bookingRouter.get('/my-bookings', protect, getUserBookings);
bookingRouter.get('/hotel-bookings', protect, getHotelBookings);

module.exports = {bookingRouter};