const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;

const app = express();
const PORT = process.env.PORT || 3001;
const URL = process.env.URL;

let db;

app.use(cors());

MongoClient.connect(URL, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to MongoDB");
    db = client.db();

    app.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Listening on port ${PORT}`);
      }
    });
  })
  .catch((err) => {
    console.log(`DB connection error: ${err}`);
  });

app.use(express.static(path.join(__dirname, "../frontend/public")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/public", "index.html"));
  });

app.get("/cars", (req, res) => {
  const cars = [];

  db.collection("cars")
    .find()
    .forEach((car) => cars.push(car))
    .then(() => {
      res.status(200).json(cars);
    })
    .catch(() => {
      res.status(500).json({ error: "Something went wrong..." });
    });
});