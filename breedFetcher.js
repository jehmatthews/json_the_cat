const request = require('request');
const breed = process.argv[2].slice(0, 4).toLowerCase();


request(`https://api.thecatapi.com/v1/breeds/${breed}`, (error, response, body) => {
  if (body === "{}") {
    console.log('Breed is not found');
    return;
  };
  if (error) {
    console.log("Error: ", error);
  };
  const data = JSON.parse(body);
  console.log(data.description);
});
