const express = require('express');
const router = express.Router();

router.post("/auth/login", (req, res) => {
    res.json({ message: "welcome on admin backend" });
});
router.get("/auth", (req, res) => {
    res.json({ message: "welcome on admin backend" });
});
router.get("/auth", (req, res) => {
    res.json({ message: "welcome on admin backend" });
});
router.get("/auth", (req, res) => {
    res.json({ message: "welcome on admin backend" });
});

module.exports = router;
