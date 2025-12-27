const express = require("express");
const router = express.Router();

const Event = require("../models/Event");
const Notification = require("../models/Notification");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

// CREATE EVENT + CREATE NOTIFICATIONS
router.post("/", auth, async (req, res) => {
  try {
    const event = await Event.create({
      title: req.body.title,
      description: req.body.description,
      stars: req.body.stars,
      createdBy: req.user,
    });

    const users = await User.find();

    await Notification.insertMany(
      users.map((u) => ({
        user: u._id,
        message: `New event created: ${event.title}`,
      }))
    );

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Event creation failed" });
  }
});

// GET ALL EVENTS
router.get("/", auth, async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name");
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events" });
  }
});

module.exports = router;
