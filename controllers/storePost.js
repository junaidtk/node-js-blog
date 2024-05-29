const path = require("path");
const Post = require("../models/post");

module.exports = (req, res) => {
  async function createPost() {
    console.log(req.files);
    const { image } = req.files;

    image.mv(path.resolve(__dirname, "..", "public/posts", image.name));

    const createdPosts = await Post.create({
      ...req.body,
      image: `/posts/${image.name}`,
    });
    console.log(createdPosts);
    res.redirect("/");
  }
  createPost();
};
