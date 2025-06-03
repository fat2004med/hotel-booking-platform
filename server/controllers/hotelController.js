const Hotel = require("../models/Hotel.js");
const User = require("../models/User.js"); // Assuming User model is also needed for req.user._id

 const registerHotel = async (req, res) => {
    try {
        const { name, address, contact, city } = req.body;
        const owner = req.user._id;

        // Check if User Already Registered
        const hotel = await Hotel.findOne({ owner });
        if (hotel) {
            return res.json({ success: false, message: "Hotel Already Registered" });
        }

        await Hotel.create({ name, address, contact, city, owner });

        await User.findByIdAndUpdate(owner, { role: "hotelOwner" }); // Assuming 'role' is a field in the User model and 'hotelOwner' is the desired role.

        res.json({ success: true, message: "Hotel Registered Successfully" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
module.exports={registerHotel}