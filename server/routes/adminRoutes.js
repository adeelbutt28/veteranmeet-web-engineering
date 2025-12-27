const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Event = require("../models/Event");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// GET ALL USERS
router.get("/users", auth, admin, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// GET ALL EVENTS
router.get("/events", auth, admin, async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
