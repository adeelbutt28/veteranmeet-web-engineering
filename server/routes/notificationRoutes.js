const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, async (req, res) => {
  try {
    const notifications = await Notification.find({
      user: req.user,
    }).sort({ createdAt: -1 });

    res.json(notifications);
  } catch {
    res.status(500).json({ message: "Failed to load notifications" });
  }
});

module.exports = router;
