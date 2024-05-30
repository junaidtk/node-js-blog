const Post = require("../models/post.js");

module.exports = (req, res) => {
  async function getAllPosts() {
    var posts = await Post.find({});

    //console.log(posts);
    console.log("from home page");
    console.log(req.session);

    res.render("index", {
      posts,
    });
  }
  getAllPosts();
};
