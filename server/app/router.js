const express = require("express");
const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations

// Route to get a list of items
router.get("/movies", (req, res) => {
  if (req.query.genre) {
    client
      .query("SELECT * FROM movies WHERE genre_ids = ? AND id != ?", [
        req.query.genre,
        req.query.id,
      ])
      .then(([movies]) => {
        res.status(200).json(movies);
      });
  } else {
    client.query("SELECT * FROM movies").then(([movies]) => {
      res.status(200).json(movies);
    });
  }
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
      } else {
        res.status(200).json(movie);
      }
    });
});

router.get("/genres", (req, res) => {
  client
    .query("SELECT DISTINCT genre_ids FROM movies")
    .then((genres) =>
      res.status(200).json(genres[0].map((movie) => movie.genre_ids))
    );
  // via le client ecrire une requete sql qui me retourne la liste des genres uniques
  // tips: utiliser distinct
});

// Route to add a new item

/* ************************************************************************* */

module.exports = router;
