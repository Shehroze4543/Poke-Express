const express = require("express");
// Create our express app
const app = express();
const port = 3025;

const pokemon = require("./models/pokemon.js");

//MiddleWare
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// allow us to read client's request.body
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Pokemon App!</h1>");
});

app.get("/pokemon", (req, res) => {
  res.render("Index");
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
