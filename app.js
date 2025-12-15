const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [];

// Home
app.get("/", (req, res) => {
  res.render("index", { todos: todos });
});

// Add todo
app.post("/add", (req, res) => {
  const newTodo = req.body.todo;
  if (newTodo) {
    todos.push(newTodo);
  }
  res.redirect("/");
});

// Delete todo
app.post("/delete", (req, res) => {
  const index = req.body.index;
  todos.splice(index, 1);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
