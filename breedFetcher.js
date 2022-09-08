const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/${breedName.slice(0, 4).toLowerCase()}`, (error, response, body) => {
    if (body === "{}") {
      return;
    }
    if (error) {
      callback(null, error);
    }
    const data = JSON.parse(body);
    callback(null, data.description);
  });
};

module.exports = { fetchBreedDescription };