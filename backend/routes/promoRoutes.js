const express = require("express");
const router = express.Router();

const promoCodes = {
    SAVE10: { type: "percentage", value: 10 },
    FLAT100: { type: "flat", value: 100 }
};

router.post("/validate", (req, res) => {
    const { code, subtotal } = req.body;

    if (!code || !subtotal) {
        return res.status(400).json({ message: "Promo code and subtotal are required" });
    }

    const promo = promoCodes[code.toUpperCase()];

    if (!promo) {
        return res.status(400).json({ valid: false, message: "Invalid promo code" });
    }

    let discount = 0;
    if (promo.type === "percentage") {
        discount = (subtotal * promo.value) / 100;
    } else if (promo.type === "flat") {
        discount = promo.value;
    }

    const totalAfterDiscount = subtotal - discount;

    res.status(200).json({
        valid: true,
        discount,
        totalAfterDiscount,
        message: `Promo code applied successfully!`
    });
});

module.exports = router;
