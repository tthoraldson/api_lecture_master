var express = require('express');
var router = express.Router();
var request = require('request');
var key = 'b900e0d5e332753a460a64eaa8de00fd';

// this can handle requests to /getRandomPet or /getRandomPet/animal 
router.get('/getRandomPet/:animal*?', function(req, res) {
  var baseURL = 'http://api.petfinder.com/';
  var query = 'pet.getRandom';
  query += '?key=' + key;
  if(req.params.animal) {
    query += '&animal=' + req.params.animal;
  }
  query += '&output=basic';
  query += '&format=json';

  var queryString = baseURL + encodeURI(query);
  console.log(queryString);

  // make ajax request to petfinder API
  request(queryString, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body) // Show the HTML for the Google homepage.
      var pets = JSON.parse(body);
      res.send(pets);
    } else {
      res.sendStatus(500);
    }

  });
});

module.exports = router;
