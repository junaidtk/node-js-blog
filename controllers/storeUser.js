const User = require("../models/user");

module.exports = (req, res) => {
  async function createUser() {
    console.log("created user controller");

    try {
      const createdUser = await User.create(req.body);
      console.log("created user enddddd");
      res.redirect("/");
    } catch (error) {
      //   console.log(
      //     Object.keys(error.errors).map((key) => error.errors[key].message)
      //   );

      const resgistrationErrors = Object.keys(error.errors).map(
        (key) => error.errors[key].message
      );

      req.flash("registrationErrors", resgistrationErrors);

      //   console.log("resgistrationErrors");
      //   console.log(resgistrationErrors);

      // req.session.registrationErrors = resgistrationErrors;

      //   req.session.save((err) => {
      //     if (err) {
      //       console.log("Error saving session:", err);
      //     } else {
      //       res.send("Errors saved to session");
      //     }
      //   });
      console.log("resgistrationErrors");
      console.log(req.session.resgistrationErrors);

      res.redirect("/auth/register");
    }
  }
  createUser();
};
