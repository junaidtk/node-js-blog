const User = require("../models/user");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.userId);

    if (!user) {
      res.redirect("/");
    }

    next();
  } catch (error) {
    res.redirect("/");
  }
};