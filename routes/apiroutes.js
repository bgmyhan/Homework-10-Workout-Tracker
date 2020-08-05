const db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
       
    })
 
    app.get("/api/workouts/range", ({}, res) => {
      console.log(req)
    });
    // App.post to submit new completed workouts
    app.post("/api/workouts/", (req, res) => {
     console.log(res)
      });
      // App.put to update workouts by MongoDB _id value and update the exercsise body
    //   app.put("/api/workouts/:id", (req, res) => {
    //     console.log(req)
    // });
};