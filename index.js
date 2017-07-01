var express = require('express')
var path = require('path');

var app = express();

app.use(express.static('public'))
app.get('/', function(req, res){
  res.sendFile("./public/index.html");
});

app.listen(3020, function(){
  console.log("Magic Is Happening On Port: 3020");
})
