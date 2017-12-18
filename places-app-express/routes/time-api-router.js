const express = require("express");

const Time = require("../models/google-times-model");

const router = express.Router();

router.get("/best-time", (req, res, next) => {
    Time
      .find()
      .exec()
      .then( (timeResults) => {
          res.status(200).json(timeResults);
      })
      .catch( (err) => {
          console.log("GET /best-times ERROR");
          console.log(err);
          res.status(500).json({ error: "Time list database ERROR" });
      });
}); // GET /best-time


module.exports = router;
