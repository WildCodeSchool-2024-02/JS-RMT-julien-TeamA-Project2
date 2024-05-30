const express = require("express");
const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations

// Route to get a list of items
router.get("/", (req, res) => {
  client.query('SELECT * FROM movies')
  .then((movies) => {
    res.status(200).json(movies[0]);
  });
});

// Route to get a specific item by ID

// Route to add a new item

/* ************************************************************************* */

module.exports = router;
