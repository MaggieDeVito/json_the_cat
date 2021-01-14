const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => { // request function
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body); // making it into a object
    if (data.length === 0) {
      callback(null, 'Breed not found');
    } else {
      callback(null, data[0].description); // accessing the description in the object
    }
  });
};

module.exports = {
  fetchBreedDescription
};

