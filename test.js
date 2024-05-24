const mongoose = require("mongoose");

const Post = require("./models/post");
const { error } = require("console");

mongoose.connect("mongodb://localhost/node-js-test-blog");
// mongoose.connect("mongodb://localhost/node-js-blog");

// Get all posts
async function findAllPost() {
  const findpost = await Post.find({});
  console.log(findpost);
}

findAllPost();

// Find sepecific item with searched title
async function findPost() {
  const findpost = await Post.find({ title: "second junu title" });
  console.log(findpost);
}

// findPost();

// Create Post
async function ceatePost() {
  var createdPost = await Post.create({
    title: "third junu title",
    description: "third junu description",
    content: "third junu content",
  });

  console.log(createdPost);
}

// ceatePost();

// Get specific Item by using iD
async function getSpecificItem() {
  var item = await Post.findById("664f5955b664ca79cac77dd5");
  console.log(item);
}

// getSpecificItem();

async function updatePosts() {
  const update = await Post.findByIdAndUpdate("664f4334f85076fcc67769b2", {
    title: "initial posts",
  });
  console.log(update);
}

//updatePosts();

// Post.create({
//   title: "junu title",
//   description: "junu description",
//   content: "junu content",
// });
