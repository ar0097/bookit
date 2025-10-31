const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://arbazshah7454_db_user:jGlo50hgxuQti8GE@cluster0.xqsboq9.mongodb.net/bookit?appName=Cluster0"); // replace with actual URI
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;


