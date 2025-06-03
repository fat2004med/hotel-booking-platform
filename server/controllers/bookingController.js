const Room = require("../models/Room.js");
const Booking = require("../models/Booking.js");
const Hotel = require("../models/Hotel.js");

// Helper function to check room availability
const isRoomAvailable = async (roomId, checkInDate, checkOutDate) => {
  const conflictingBookings = await Booking.find({
    room: roomId,
    $or: [
      {
        checkInDate: { $lt: new Date(checkOutDate) },
        checkOutDate: { $gt: new Date(checkInDate) }
      }
    ]
  });
  return conflictingBookings.length === 0;
};

// Calculate total price for stay
const calculateTotalPrice = async (roomId, checkInDate, checkOutDate) => {
  const room = await Room.findById(roomId);
  const nights = Math.ceil(
    (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
  );
  return room.pricePerNight * nights;
};

// Controller functions
const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;
    const available = await isRoomAvailable(room, checkInDate, checkOutDate);
    res.json({ available });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, guests } = req.body;
    
    // Validation
    if (!(await isRoomAvailable(room, checkInDate, checkOutDate))) {
      return res.status(400).json({ error: "Room not available for selected dates" });
    }

    const roomDetails = await Room.findById(room).populate('hotel');
    const totalPrice = await calculateTotalPrice(room, checkInDate, checkOutDate);

    const booking = await Booking.create({
      user: req.user._id,
      room,
      hotel: roomDetails.hotel._id,
      guests: parseInt(guests),
      checkInDate,
      checkOutDate,
      totalPrice
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate('room hotel')
      .sort({ checkInDate: 1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHotelBookings = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ owner: req.user._id });
    if (!hotel) return res.status(404).json({ error: "Hotel not found" });

    const bookings = await Booking.find({ hotel: hotel._id })
      .populate('room user')
      .sort({ checkInDate: 1 });

    const stats = {
      totalBookings: bookings.length,
      totalRevenue: bookings.reduce((sum, b) => sum + b.totalPrice, 0)
    };

    res.json({ bookings, stats });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  checkAvailabilityAPI,
  createBooking,
  getUserBookings,
  getHotelBookings
};