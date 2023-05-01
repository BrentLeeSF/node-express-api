// Bring in the express server
const express = require("express");

// Bring in the Express Router
const router = express.Router();

const { getUsers } = require('../controllers/notes.controller');

// Retrieve all stores
router.get('/notes', getUsers);

module.exports = router;