const request = require("postman-request");

const geocode = (address, callback) => {
  const cordURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibW9zaDNiYW4iLCJhIjoiY2t2d2sxeGk5YzZ0YjMwczdicjNreWh2YiJ9.QW28twiHjivNMMEkOglXAw&limit=1`;
  request({ url: cordURL, json: true }, (error, response) => {
    if (error) {
      callback(undefined, error);
    } else if (response.body.error) {
      callback(undefined, response.body.error);
    } else {
      callback(
        {
          longitude: response.body.features[0].center[0],
          latitude: response.body.features[0].center[1],
          location: response.body.features[0].place_name,
        },
        undefined
      );
    }
  });
};

module.exports = geocode;
