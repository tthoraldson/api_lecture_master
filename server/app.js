var express = require("express");
var app = express();
var path = require('path');
var pets = require('./routes/pets');

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

app.use('/pets', pets);

app.get("/jq", function(req,res,next){
    res.sendFile(path.join(__dirname, "./public/views/indexjq.html"));
});

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
