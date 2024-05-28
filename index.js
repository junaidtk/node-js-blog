const express = require("express");
const expressEdge = require("express-edge");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const Post = require("./models/post");

const app = new express();

mongoose.connect("mongodb://localhost/node-js-blog");

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var customMiddleware = (req, res, next) => {
  console.log("I have been called");
  next();
};

app.use(customMiddleware);

app.get("/", (req, res) => {
  async function getAllPosts() {
    var posts = await Post.find({});

    //console.log(posts);
    res.render("index", {
      posts,
    });
  }
  getAllPosts();
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/posts/store", (req, res) => {
  async function createPost() {
    console.log(req.files);
    const { image } = req.files;

    image.mv(path.resolve(__dirname, "public/posts", image.name));

    const createdPosts = await Post.create({
      ...req.body,
      image: `/posts/${image.name}`,
    });
    console.log(createdPosts);
    res.redirect("/");
  }
  createPost();
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// comment added

app.listen("3030", () => {
  console.log("App is listening on port 3030");
});
