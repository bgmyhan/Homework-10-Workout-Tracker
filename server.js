const express = require("./node_modules/express");
const mongoose = require("mongoose");
// const API = require("API");
const router = require("./node_modules/express").Router();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });


// console.log(__dirname)
require("./routes/html");
require("./routes/api");


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
// console.log(API)
console.log(PORT)