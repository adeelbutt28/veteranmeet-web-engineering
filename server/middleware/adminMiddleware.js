const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);

    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Admin access only" });
    }

    next();
  } catch {
    res.status(500).json({ message: "Admin check failed" });
  }
};
