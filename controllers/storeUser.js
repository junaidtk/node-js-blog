const User = require("../models/user");

module.exports = (req, res) => {
  async function createUser() {
    const createdUser = await User.create(req.body);

    console.log(createdUser);

    res.redirect("/");
  }
  createUser();
};
