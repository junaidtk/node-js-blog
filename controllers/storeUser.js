const User = require("../models/user");

module.exports = (req, res) => {
  async function createUser() {
    console.log("created user controller");

    try {
      const createdUser = await User.create(req.body);
      console.log("created user enddddd");
      res.redirect("/");
    } catch (error) {
      res.redirect("/auth/register");
    }
  }
  createUser();
};
