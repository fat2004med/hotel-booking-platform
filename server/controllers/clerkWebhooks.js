const User = require("../models/User.js");
const { Webhook } = require("svix");

const clerkWebhooks = async (req, res) => {
    try {
        if (!process.env.CLERK_WEBHOOK_SECRET) {
            throw new Error("CLERK_WEBHOOK_SECRET is not configured");
        }

        const payload = JSON.stringify(req.body);
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const evt = whook.verify(payload, headers);
        
        const { data, type } = evt;

        const userData = {
            _id: data.id,
            email: data.email_addresses?.find(email => email.id === data.primary_email_address_id)?.email_address,
            username: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
            image: data.image_url,
        };

        switch (type) {
            case "user.created":
                await User.create(userData);
                break;
            case "user.updated":
                await User.findByIdAndUpdate(data.id, userData, { new: true });
                break;
            case "user.deleted":
                await User.findByIdAndDelete(data.id);
                break;
            default:
                return res.status(400).json({ success: false, message: "Unhandled event type" });
        }

        res.status(200).json({ success: true, message: "Webhook processed" });

    } catch (error) {
        console.error("Webhook error:", error);
        res.status(400).json({ 
            success: false, 
            message: error.message || "Webhook processing failed" 
        });
    }
};

module.exports = clerkWebhooks;