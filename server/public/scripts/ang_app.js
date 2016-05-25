var myApp = angular.module('myApp', []);

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
    $scope.breed = '';
    // API key
    var key = 'b900e0d5e332753a460a64eaa8de00fd';
    var baseURL = 'http://api.petfinder.com/';

    $scope.getRandomPet = function() {
      var query = 'pet.getRandom';
      query += '?key=' + key;
      query += '&animal=dog';
      query += '&output=basic';
      query += '&format=json';

      var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
      console.log(request);

      $http.jsonp(request).then(
          function(response) {
              $scope.animal = response.data.petfinder.pet;
              console.log('random pet: ', $scope.animal);
          }
      );
    }

    $scope.getBreeds = function() {
      var query = 'breed.list';
      query += '?key=' + key;
      query += '&animal=' + $scope.breed.toLowerCase();
      query += '&format=json';

      var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
      console.log(request);

      $http.jsonp(request).then(
          function(response) {
              console.log('breeds: ', response.data);
              $scope.breeds = response.data.petfinder.breeds.breed;
          }
      );
    }

}]);
