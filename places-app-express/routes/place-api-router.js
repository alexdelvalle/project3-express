const express = require("express");

const Place = require("../models/place-model");

const router = express.Router();

router.get("/my-places", (req, res, next) => {
    Place
      .find({ owner: req.user._id })
      .limit(20)
      .exec()
      .then( (placeResults) => {
          res.status(200).json(placeResults);
      })
      .catch( (err) => {
          console.log("GET /my-places ERROR");
          console.log(err);
          res.status(500).json({ error: "Place list database ERROR" });
      });
}); // GET /my-places

// POST /my-places
router.post("/my-places", (req, res, next) => {
    if (req.user === undefined) {
        res.status(400).json({ error: "You must be logged in to see this page." });
    }

    req.body.googlePlaces.forEach(function(onePlace) {
        onePlace.owner = req.user._id;
    });

    Place.create(req.body.googlePlaces)
      .then( (allPlaces) => {
          res.status(200).json(allPlaces);
      })
      .catch( (err) => {
          if (err.errors) {
              res.status(400).json(err.errors);
          }
          else {
              res.status(500).json({ error: "Place save database ERROR" });
          }
      });
}); // POST /my-places

router.delete("/my-places/:id", (req, res, next) => {
    if (req.user === undefined) {
        res.status(400).json({ error: "You must be logged in to see this page." });
    }

    Place.findByIdAndRemove(req.params.id)
      .then( (placeFromDb) => {
          if (placeFromDb === null) {
              res.status(404).json({ error: "This place does not exist in this list." });
          }
          else {
              res.status(200).json(placeFromDb);
          }
      })
      .catch( (err) => {
          console.log("DELETE /my-places/:id ERROR");
          console.log(err);
          res.status(500).json({ error:"Delete place database error" });
      });
}); // DELETE /my-places/:id


module.exports = router;
