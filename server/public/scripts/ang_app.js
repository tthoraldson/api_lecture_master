var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/barnyard", {
      templateUrl: "/views/partials/barnyard.html",
      controller: "barnyard"
    }).
    when("/bird", {
      templateUrl: "/views/partials/bird.html",
      controller: "bird"
    }).
    when("/smallfurry", {
      templateUrl: "/views/partials/smallfurry.html",
      controller: "smallfurry"
    }).
    otherwise({           //default like a switch statement
      redirectTo: "/barnyard" // everyone loves barnyard <3
    });

}]);

// myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
//   var key = '6a55deefc1db87940051b82878df62d7';
//   var baseURL = 'http://api.petfinder.com/';
//   $scope.breed = '';
//
//   $scope.getRandomPet = function() {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     // query += '&animal=dog';
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.animal = response.data.petfinder.pet;
//         $scope.breed = $scope.animal.animal.$t;
//         $scope.getBreeds();
//       }
//     )
//   }
//
//   $scope.getBreeds = function() {
//     var query = 'breed.list';
//     query += '?key=' + key;
//     query += '&animal=' + $scope.breed.toLowerCase();
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log('breeds: ', response.data);
//         $scope.breeds = response.data.petfinder.breeds.breed;
//       }
//     )
//   }
//
// }]);

myApp.controller('bird', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomPet = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=bird';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
        $scope.getBreeds();
      }
    )
  }

}]);

myApp.controller('barnyard', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomPet = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=barnyard';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
        $scope.getBreeds();
      }
    )
  }

}]);

myApp.controller('smallfurry', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomPet = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=smallfurry';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
        $scope.getBreeds();
      }
    )
  }

}]);
