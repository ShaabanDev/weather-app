const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibW9zaDNiYW4iLCJhIjoiY2t2d2sxeGk5YzZ0YjMwczdicjNreWh2YiJ9.QW28twiHjivNMMEkOglXAw&limit=1`;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback(undefined, error);
    } else if (body.error) {
      callback(undefined, body.error);
    } else {
      callback(
        {
          longitude: body.features[0].center[0],
          latitude: body.features[0].center[1],
          location: body.features[0].place_name,
        },
        undefined
      );
    }
  });
};

module.exports = geocode;
