require("dotenv").config();

require("../config/mongoose-setup");

const Place = require("../models/place-model");

const placeList = [
  {
    placeName: "Alex's Store",
    address: "888 SW 10 St, Miami, FL 33196",
    mapURL: "www.google.com",
    website: "www.github.com",
    openDay: "Tuesday",
    openTime: "9:00 AM",
    closeTime: "10:00 PM",
    owner: ""
  }
];

Place.create(placeList)
  .then( (placeResults) => {
      console.log(`${placeResults.length} places created.`);
  })
  .catch( (err) => {
      console.log("Save ERROR");
      console.log(err);
  });
