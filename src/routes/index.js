const express = require("express");
const router = express.Router();
const { getUsers } = require('../controllers/notes.controller');

router.get('/notes', getUsers);

module.exports = router;
