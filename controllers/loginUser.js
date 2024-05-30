const bcrypt = require("bcrypt");
const User = require("../models/user");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    console.log("user details after find one");
    console.log(user);

    if (user) {
      try {
        const same = await bcrypt.compare(password, user.password);

        console.log("user after compare");
        console.log(same);

        if (same) {
          req.session.userId = user._id;
          res.redirect("/");
        }
      } catch (error) {
        console.log("error inside same user");
        console.log(error);
        res.redirect("/auth/login");
      }
    } else {
      res.redirect("/auth/login");
    }
  } catch (error) {
    console.log("error after user");
    console.log(error);
    res.redirect("/auth/login");
  }
};
