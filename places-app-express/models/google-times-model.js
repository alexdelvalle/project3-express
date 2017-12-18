const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timeSchema = new Schema(
  {
      locationName: { type: String },
      locationID: { type: String },
      locationBestTime: { type: String },
      locationDays: {type: Array},
  }
);

const Time = mongoose.model("Time", timeSchema);

module.exports = Time;
