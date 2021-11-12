// import request module
const request = require("postman-request");
// import geocode function from geocode module
const geocode = require("./utils/geocode");
// import forecast function from forecast module
const forecast = require("./utils/forecast");

// calling geocode to get the the coordinates of specific area
geocode("qena", (data, error) => {
  if (data) {
    console.log(error);
  } else {
      // passing the the coordinates to the forecast function
    forecast(data.longitude, data.latitude, (response, lError, bError) => {
      if (response) {
        console.log(response);
      }
    });
  }
});
