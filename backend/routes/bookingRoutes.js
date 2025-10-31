const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { id, experience, date, time, qty, subtotal, taxes, total } = req.body;

        if (!id || !experience || !date || !time || !qty || !subtotal || !taxes || !total) {
            return res.status(400).json({ message: "All fields including id are required" });
        }

        const existing = await Booking.findOne({
            id,
            experience,
            date,
            time,
            qty,
            subtotal,
            taxes,
            total,
        });

        if (existing) {
            return res.status(400).json({ message: "This exact booking already exists" });
        }

        const booking = await Booking.create({
            id: id,
            experience,
            date,
            time,
            qty,
            subtotal,
            taxes,
            total
        });

        res.status(201).json({ message: "Booking created successfully", booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

module.exports = router;
