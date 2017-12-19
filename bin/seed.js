require("dotenv").config();

require("../config/mongoose-setup");

const Time = require("../models/google-times-model");

const timeList = [
  {
      locationName: "Spa and Nail Fever",
      locationID: "ChIJ_0C8bYS22YgReB_PKqn2lbk",
      locationBestTime: "",
      locationDays: [
          {
              day: 0,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 9,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 12,
                    busyLevel: 5
                  },
                  {
                    hour: 15,
                    busyLevel: 6
                  },
                  {
                    hour: 18,
                    busyLevel: 7
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 1,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 9,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 12,
                    busyLevel: 2
                  },
                  {
                    hour: 15,
                    busyLevel: 3
                  },
                  {
                    hour: 18,
                    busyLevel: 5
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 2,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 9,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 12,
                    busyLevel: 4
                  },
                  {
                    hour: 15,
                    busyLevel: 3
                  },
                  {
                    hour: 18,
                    busyLevel: 2
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 3,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 9,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 12,
                    busyLevel: 3
                  },
                  {
                    hour: 15,
                    busyLevel: 5
                  },
                  {
                    hour: 18,
                    busyLevel: 6
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 4,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 9,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 12,
                    busyLevel: 4
                  },
                  {
                    hour: 15,
                    busyLevel: 5
                  },
                  {
                    hour: 18,
                    busyLevel: 6
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 5,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 9,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 12,
                    busyLevel: 8
                  },
                  {
                    hour: 15,
                    busyLevel: 5
                  },
                  {
                    hour: 18,
                    busyLevel: 4
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 6,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 9,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 12,
                    busyLevel: 5
                  },
                  {
                    hour: 15,
                    busyLevel: 6
                  },
                  {
                    hour: 18,
                    busyLevel: 7
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },

      ]
  },
  {
      locationName: "Publix Super Market at Brickell Village",
      locationID: "ChIJs_fbWYa22YgR_lmmGCJALb8",
      locationBestTime: "",
      locationDays: [
          {
              day: 0,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 3
                  },
                  {
                    hour: 12,
                    busyLevel: 6
                  },
                  {
                    hour: 15,
                    busyLevel: 7
                  },
                  {
                    hour: 18,
                    busyLevel: 9
                  },
                  {
                    hour: 21,
                    busyLevel: 5
                  },
              ]
          },
          {
              day: 1,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 4
                  },
                  {
                    hour: 12,
                    busyLevel: 6
                  },
                  {
                    hour: 15,
                    busyLevel: 6
                  },
                  {
                    hour: 18,
                    busyLevel: 8
                  },
                  {
                    hour: 21,
                    busyLevel: 5
                  },
              ]
          },
          {
              day: 2,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 4
                  },
                  {
                    hour: 12,
                    busyLevel: 7
                  },
                  {
                    hour: 15,
                    busyLevel: 6
                  },
                  {
                    hour: 18,
                    busyLevel: 8
                  },
                  {
                    hour: 21,
                    busyLevel: 5
                  },
              ]
          },
          {
              day: 3,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 4
                  },
                  {
                    hour: 12,
                    busyLevel: 7
                  },
                  {
                    hour: 15,
                    busyLevel: 6
                  },
                  {
                    hour: 18,
                    busyLevel: 8
                  },
                  {
                    hour: 21,
                    busyLevel: 5
                  },
              ]
          },
          {
              day: 4,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 4
                  },
                  {
                    hour: 12,
                    busyLevel: 6
                  },
                  {
                    hour: 15,
                    busyLevel: 5
                  },
                  {
                    hour: 18,
                    busyLevel: 7
                  },
                  {
                    hour: 21,
                    busyLevel: 4
                  },
              ]
          },
          {
              day: 5,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 4
                  },
                  {
                    hour: 12,
                    busyLevel: 6
                  },
                  {
                    hour: 15,
                    busyLevel: 6
                  },
                  {
                    hour: 18,
                    busyLevel: 9
                  },
                  {
                    hour: 21,
                    busyLevel: 5
                  },
              ]
          },
          {
              day: 6,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 3
                  },
                  {
                    hour: 12,
                    busyLevel: 6
                  },
                  {
                    hour: 15,
                    busyLevel: 6
                  },
                  {
                    hour: 18,
                    busyLevel: 8
                  },
                  {
                    hour: 21,
                    busyLevel: 5
                  },
              ]
          },

      ]
  },
  {
      locationName: "The UPS Store - Brickell",
      locationID: "ChIJ18-nd4W22YgRIkdigLH7rhk",
      locationBestTime: "",
      locationDays: [
          {
              day: 0,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 9,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 12,
                    busyLevel: 5
                  },
                  {
                    hour: 15,
                    busyLevel: 8
                  },
                  // {
                  //   hour: 18,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 1,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 4
                  },
                  {
                    hour: 12,
                    busyLevel: 7
                  },
                  {
                    hour: 15,
                    busyLevel: 5
                  },
                  {
                    hour: 18,
                    busyLevel: 6
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 2,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 3
                  },
                  {
                    hour: 12,
                    busyLevel: 8
                  },
                  {
                    hour: 15,
                    busyLevel: 6
                  },
                  {
                    hour: 18,
                    busyLevel: 4
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 3,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 2
                  },
                  {
                    hour: 12,
                    busyLevel: 3
                  },
                  {
                    hour: 15,
                    busyLevel: 6
                  },
                  {
                    hour: 18,
                    busyLevel: 4
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 4,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 2
                  },
                  {
                    hour: 12,
                    busyLevel: 7
                  },
                  {
                    hour: 15,
                    busyLevel: 3
                  },
                  {
                    hour: 18,
                    busyLevel: 6
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 5,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 9,
                    busyLevel: 2
                  },
                  {
                    hour: 12,
                    busyLevel: 7
                  },
                  {
                    hour: 15,
                    busyLevel: 5
                  },
                  {
                    hour: 18,
                    busyLevel: 3
                  },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },
          {
              day: 6,
              hours: [
                  // {
                  //   hour: 6,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 9,
                  //   busyLevel: 0
                  // },
                  {
                    hour: 12,
                    busyLevel: 5
                  },
                  {
                    hour: 15,
                    busyLevel: 8
                  },
                  // {
                  //   hour: 18,
                  //   busyLevel: 0
                  // },
                  // {
                  //   hour: 21,
                  //   busyLevel: 0
                  // },
              ]
          },

      ]
  },
];

Time.create(timeList)
  .then( (timeResults) => {
      console.log(`${timeResults.length} time logs created.`);
  })
  .catch( (err) => {
      console.log("Save ERROR");
      console.log(err);
  });
