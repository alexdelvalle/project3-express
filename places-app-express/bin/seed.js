require("dotenv").config();

require("../config/mongoose-setup");

const Place = require("../models/place-model");

const placeList = [
  {
    placeName: "Alex's Store",
    address: "888 SW 10 St, Miami, FL 33196",
    mapURL: "www.google.com",
    website: "www.github.com",
    status: "We're Open!",
    hours: [
      "Monday: 9:00 AM - 5:00 PM",
      "Tuesday: 9:00 AM - 5:00 PM",
      "Wednesday: 9:00 AM - 5:00 PM",
      "Thursday: 9:00 AM - 5:00 PM",
      "Friday: 9:00 AM - 8:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: 10:00 AM - 2:00 PM"
    ],
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
