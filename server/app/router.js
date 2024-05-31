const express = require("express");
const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations

// Route to get a list of items
router.get("/movies", (req, res) => {
  client.query("SELECT * FROM movies").then(([movies]) => {
    res.status(200).json(movies);
  });
});

router.get("/movies/:id", (req, res) => {
  const movie = movies.find((film) => film.id === +req.params.id);
  res.status(200).json(movie);
});

// Route to get a specific item by ID
router.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  client
    .query("SELECT * FROM movies WHERE id = ? LIMIT 1", [movieId])
    .then(([movies]) => {
      const movie = movies[0];

      if (!movie) {
        res.sendStatus(404);
      }

      res.status(200).json(movie);
    });
});

// Route to add a new item

/* ************************************************************************* */

module.exports = router;
