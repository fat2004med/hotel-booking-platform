const cloudinary = require("cloudinary").v2; // Use .v2 to import the v2 API

const connectCloudinary = async () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        console.log("Cloudinary connected successfully!"); // Optional: for confirmation
    } catch (error) {
        console.log("Cloudinary connection error:", error);
        // You might want to throw the error or handle it more robustly
        // process.exit(1); // Exit process if Cloudinary connection fails
    }
};

module.exports = connectCloudinary;