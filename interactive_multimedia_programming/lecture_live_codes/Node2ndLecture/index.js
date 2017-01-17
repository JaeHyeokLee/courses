var express = require('express');
var app = express();

app.get('/', function (req,res){
  res.send("Hello World");
})

app.use(express.static('public'))

var PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, function(){
  console.log("App running in a port: " + PORT_NUMBER);
})
