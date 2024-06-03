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

      res.status(200).json(movie);
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

router.get("/languages", (req, res) => {
  client
    .query("SELECT DISTINCT original_language FROM movies")
    .then((languages) =>
      res
        .status(200)
        .json(languages[0].map((language) => language.original_language))
    );
});

// Route to add a new item

/* ************************************************************************* */

module.exports = router;
