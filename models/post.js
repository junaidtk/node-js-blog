const { Module } = require("module");
const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
