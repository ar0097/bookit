const express = require("express");
const router = express.Router();
const Experience = require("../models/Experiences");


router.get("/", async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.json(experiences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const experience = await Experience.findOne({ id: req.params.id });
        if (!experience) return res.status(404).json({ message: "Experience not found" });
        res.json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
