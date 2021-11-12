// import request module
const request = require("postman-request");
// import geocode function from geocode module
const geocode = require("./utils/geocode");
// import forecast function from forecast module
const forecast = require("./utils/forecast");

//

// calling geocode to get the the coordinates of specific area
process.argv[2]?geocode(process.argv[2], ({longitude,latitude,location}={}, error) => {
  if (error) {
    return console.log(error);
  }
  // passing the the coordinates to the forecast function
  forecast(longitude,latitude, (response, lError, bError) => {
    if (response) {
      console.log(location);
      console.log(response);
    } else if (lError) {
      console.log(lError);
    } else {
      console.log(bError);
    }
  });
}):console.log('Please provide an address');