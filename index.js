const express = require("express");
const expressEdge = require("express-edge");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");

const Post = require("./models/post");

const homePageController = require("./controllers/homePage");
const creatPostController = require("./controllers/createPost");
const storePostController = require("./controllers/storePost");
const createUserController = require("./controllers/createUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");

var storePost = require("./middleware/storePost");
var auth = require("./middleware/auth");

const app = new express();
mongoose.connect("mongodb://localhost/node-js-blog");

// const mongoStore = connectMongo(expressSession);

// app.use(
//   expressSession({
//     secret: "secret",
//     store: new mongoStore({
//       mongooseConnection: mongoose.connection,
//     }),
//   })
// );

app.use(
  expressSession({
    secret: "secret",
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't create session until something is stored
    store: connectMongo.create({
      mongoUrl: "mongodb://localhost/node-js-blog",
      collectionName: "sessions",
    }),
    cookie: {
      secure: false, // Set to true in production when using HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/posts/store", storePost);

app.get("/", homePageController);

app.get("/auth/register", createUserController);

app.get("/posts/new", auth, creatPostController);

app.post("/posts/store", auth, storePost, storePostController);

app.post("/users/register", storeUserController);

app.get("/auth/login", loginController);

app.post("/users/login", loginUserController);

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
