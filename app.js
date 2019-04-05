var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/"));

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(process.env.PORT, function() {
  console.log('Server Active!');
})