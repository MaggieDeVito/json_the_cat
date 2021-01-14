const request = require('request');

const args = process.argv.splice(2); // accessing command line arguement
const request1 = `https://api.thecatapi.com/v1/breeds/search?q=${args}`; //making a variable to request with the API and CLA

request(request1, (error, response, body) => { // request function
  const data = JSON.parse(body); // making it into a object
  if (data[0] === undefined) {
    return console.log("Breed not found");
  }
  if (error) {
    return console.log(error);
  }
  console.log(data[0].description); // accessing the description in the object
});
