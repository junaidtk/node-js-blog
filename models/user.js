const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
  email: {
    type: String,
    required: [true, "Please provide Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;

  const encrypted = await bcrypt.hash(user.password, 10);

  user.password = encrypted;

  next();
});

module.exports = mongoose.model("user", UserSchema);
