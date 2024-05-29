const express = require("express");
const expressEdge = require("express-edge");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const Post = require("./models/post");

const homePageController = require("./controllers/homePage");
const creatPostController = require("./controllers/createPost");
const storePostController = require("./controllers/storePost");
const createUserController = require("./controllers/createUser");

var validateCreatePostMiddleware = require("./middleware/storePost");

const app = new express();

mongoose.connect("mongodb://localhost/node-js-blog");

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/posts/store", validateCreatePostMiddleware);

app.get("/", homePageController);

app.get("/auth/register", createUserController);

app.get("/posts/new", creatPostController);

app.post("/posts/store", storePostController);

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
