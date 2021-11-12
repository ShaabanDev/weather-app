const request = require("postman-request");

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c396b526cc5d10637e0ff83d64435203&query=${longitude},${latitude}&units=m`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(undefined, undefined, error);
    } else if (response.body.error) {
      callback(undefined, undefined, response.body.error);
    } else {
      const current = response.body.current;
      //     console.log(`The Current Temp is ${current.temperature} and it feal like ${current.feelslike} and the Weather Desctiption is ${current.weather_descriptions[0]}`);
      callback(
        `The Current Temp is ${current.temperature} and it feal like ${current.feelslike} and the Weather Desctiption is ${current.weather_descriptions[0]}`,
        undefined,
        undefined
      );
    }
  });
};

module.exports = forecast;
