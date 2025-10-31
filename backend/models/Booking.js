const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, 
    experience: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    qty: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    taxes: { type: Number, required: true },
    total: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
