const mongoose = require("mongoose");

const Post = require("./models/post");
const { error } = require("console");

mongoose.connect("mongodb://localhost/node-js-test-blog");

async function findPost() {
  const findpost = await Post.find({ title: "second junu title" });
  console.log(findpost);
}

findPost();

async function ceatePost() {
  var createdPost = await Post.create({
    title: "third junu title",
    description: "third junu description",
    content: "third junu content",
  });

  console.log(createdPost);
}

// ceatePost();

// Post.create({
//   title: "junu title",
//   description: "junu description",
//   content: "junu content",
// });
