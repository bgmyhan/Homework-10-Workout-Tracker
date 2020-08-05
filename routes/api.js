const db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
      console.log(req, res)
    })
 
    app.get("/api/workouts/range", ({}, res) => {
      console.log(req)
    });

    app.post("/api/workouts/", (req, res) => {
     console.log(res)
      });
 
};