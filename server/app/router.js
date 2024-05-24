const express = require("express");
const movies = require("../database/data");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations

// Route to get a list of items
router.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

// Route to get a specific item by ID

// Route to add a new item

/* ************************************************************************* */

module.exports = router;
