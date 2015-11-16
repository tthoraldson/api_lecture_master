var myApp = angular.module('myApp', []);

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
    var apikey = "ca5d63fdb921e2570069eb8267389c4a9260227a";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct the URI with our apikey
    var GamesSearchUrl = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=20';
    var query = 'Batman';
    var finalUrl = GamesSearchUrl + '&query=' + encodeURI(query) + '&json_callback=JSON_CALLBACK';

    //finalUrl = 'http://numbersapi.com/42';
    console.log('query: ', finalUrl);

    // AJAX all the things!
    $http.jsonp(finalUrl).then(
        function(response) {
            console.log(response.data.results);
            $scope.data = response.data.results;
        }
    );

}]);