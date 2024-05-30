module.exports = (req, res, next) => {
  console.log("check from authenticated js");
  console.log(req.session);
  if (req.session.userId) {
    return res.redirect("/");
  }
  next();
};
