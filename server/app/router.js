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

      const genre = movie.genre_ids;

      client.query("SELECT * FROM movies WHERE genre_ids IN (?) AND id != ?", [genre, movieId])
        .then(([similarMovies]) => {
          res.status(200).json({ movie, similarMovies });
        })
    });
});

// Route to add a new item

/* ************************************************************************* */

module.exports = router;
