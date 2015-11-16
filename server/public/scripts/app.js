$(document).ready(function() {
    gameSearch();
});

function gameSearch() {
    var apikey = "ca5d63fdb921e2570069eb8267389c4a9260227a";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct the uri with our apikey
    var GamesSearchUrl = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = "Batman";

    // send off the query
    $.ajax({
        url: GamesSearchUrl + '&query=' + encodeURI(query),
        type: "GET",
        dataType: "jsonp",
        crossDomain: true,
        jsonp: 'json_callback',
        success: searchCallback
    });

}

// callback for when we get back the results
function searchCallback(data) {
    console.log(data.results);
    updateDOM(data.results);
}

function updateDOM(data) {
    $("#container").empty();

    for(var i = 0; i < data.length; i++) {
        var el = '<div class="well">' +
                 '<h3>' + data[i].name + '</h3>' +
                 '<p>' + data[i].deck + '</p>' +
                 '</div>';
        $("#container").append(el);
    }

}