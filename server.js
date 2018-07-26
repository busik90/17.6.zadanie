var express = require('express');
var app = express();

let url;

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
  res.render('login', {
    url
  });
});

app.get('/app', function(req, res) {
  const user_name = req.query.user_name;
  res.render('app', {
    user_name
  });
});

app.use(function (req, res, next) {
  res.status(404).send('Ta strona nie istnieje!');
});

var server = app.listen(3000, 'localhost', function() {
  host = server.address().address;
  port = server.address().port;

  url = 'http://' + host + ':' + port
  console.log(`Przykładowa aplikacja nasłuchuje na ${url}`);
});