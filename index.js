const express = require("express");
const expressEdge = require("express-edge");
const path = require("path");

const app = new express();

app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});

app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

// comment added

app.listen("3030", () => {
  console.log("App is listening on port 3030");
});
