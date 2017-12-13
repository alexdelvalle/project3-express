const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
      placeName: { type: String },
      address: { type: String },
      mapURL: { type: String },
      website: { type: String },
      openDay: { type: String },
      openTime: { type: String },
      closeTime: { type: String },
      owner: { type: Schema.Types.ObjectId }
  }
);

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
