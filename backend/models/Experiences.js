const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const experienceSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4, 
        unique: true,
    },
    text: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
