const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const auth = require("../middleware/authMiddleware");

// Create event
router.post("/", auth, async (req, res) => {
  try {
    const event = await Event.create({
      ...req.body,
      createdBy: req.user,
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Event creation failed" });
  }
});

// Get all events
router.get("/", auth, async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name");
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events" });
  }
});

module.exports = router;
