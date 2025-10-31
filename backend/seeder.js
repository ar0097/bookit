const connectDB = require("./config/db");
const Experience = require("./models/Experiences");

const data = [
    { text: "Kayaking", location: "Udupi", price: 999, img: "https://image2url.com/images/1761894738693-de91c75f-bc9a-401d-9c91-30fa2e26444d.jpg" },
    { text: "Nandi Hills Sunrise", location: "Bangalore", price: 899, img: "https://image2url.com/images/1761899779970-576d92fd-a4f3-4af6-934e-8b0a47669012.jpg" },
    { text: "Coffee Trail", location: "Coorg", price: 1299, img: "https://image2url.com/images/1761899812572-08791373-bcff-48b2-b522-eecc408b160d.jpg" },
    { text: "Kayaking", location: "Udupi, Karnataka", price: 999, img: "https://image2url.com/images/1761899843584-7949fa67-03ba-4224-bdd7-4c16b917eb2e.jpg" },
    { text: "Nandi Hills Sunrise", location: "Bangalore", price: 899, img: "https://image2url.com/images/1761899889871-d5ff8a34-f2c5-490c-aed4-80fde9504209.jpg" },
    { text: "Boat Cruise", location: "Sunderban", price: 999, img: "https://image2url.com/images/1761899920365-a36ec0e6-03c6-4260-81d5-ffc6d49d1cdf.jpg" },
    { text: "Bunjee Jumping", location: "Manali", price: 999, img: "https://image2url.com/images/1761899953570-b3494f5c-87da-487f-85d5-1302328fbbce.jpg" },
    { text: "Coffee Trail", location: "Coorg", price: 1299, img: "https://image2url.com/images/1761899975814-6743c225-678d-4f22-8904-94aafdf797df.jpg" },
];

const seedDB = async () => {
    await connectDB();
    await Experience.deleteMany();
    await Experience.insertMany(data);
    console.log("✅ Data Seeded Successfully");
    process.exit();
};

seedDB();
