const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

require("dotenv/config");

// Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// Home Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to DB!");
});

// How do we start listening to the server
app.listen(3000);
