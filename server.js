const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();

const routes = require("./src/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

const PORT = process.env.PORT || 5001;

// Listen to the defined PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
