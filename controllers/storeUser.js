const User = require("../models/user");

module.exports = (req, res) => {
  async function createUser() {
    console.log("created user controller");
    const createdUser = await User.create(req.body);
    console.log("created user enddddd");
    //console.log(createdUser);

    res.redirect("/");
  }
  createUser();
};
