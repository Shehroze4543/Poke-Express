const express = require("express");
// Create our express app
const app = express();
const port = 3075;
require("dotenv").config();

const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon.js");
const methodOverride = require("method-override");

//MiddleWare
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// allow us to read client's request.body
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(methodOverride("_method"));
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Pokemon App!</h1>");
});

// app.get("/cats", function (req, res) {
//   Cat.find({}).then((allCats) => {
//     res.render("IndexCat", {
//       cats: allCats,
//     });
//   });
// });
app.get("/pokemon", (req, res) => {
  Pokemon.find({}).then((allPokemon) => {
    res.render("Index", { pokemon: allPokemon });
  });
});

app.post("/pokemon", async (req, res) => {
  const newPokemon = await Pokemon.create(req.body);
  res.redirect("/pokemon");
});
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});
// EDIT ROUTE
app.put("/pokemon/:id", async (req, res) => {
  try {
    const updatedInfo = await Pokemon.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.redirect(`/pokemon/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error: Update Route");
  }
});

app.get("/pokemon/:id/edit", async (req, res) => {
  const foundPokemonInfo = await Pokemon.findById(req.params.id);
  res.render("Edit", {
    pokemon: foundPokemonInfo,
  });
});

/////////////////////////////////////DELETE ROUTE

app.delete("/pokemon/:id", async (req, res) => {
  await Pokemon.findByIdAndDelete(req.params.id);
  res.redirect("/pokemon");
});

///////////////////SHOW ROUTE
app.get("/pokemon/:id", async (req, res) => {
  const eachPokemon = await Pokemon.findById(req.params.id);
  await res.render("Show", {
    pokemon: eachPokemon,
  });
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
