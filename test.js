const mongoose = require("mongoose");

const Post = require("./models/post");
const { error } = require("console");

mongoose.connect("mongodb://localhost/node-js-test-blog");

async function findPost() {
  const findpost = await Post.find({ title: "second junu title" });
  console.log(findpost);
}

// findPost();

async function ceatePost() {
  var createdPost = await Post.create({
    title: "third junu title",
    description: "third junu description",
    content: "third junu content",
  });

  console.log(createdPost);
}

// ceatePost();

async function getSpecificItem() {
  var item = await Post.findById("664f5955b664ca79cac77dd5");
  console.log(item);
}

getSpecificItem();

// Post.create({
//   title: "junu title",
//   description: "junu description",
//   content: "junu content",
// });
