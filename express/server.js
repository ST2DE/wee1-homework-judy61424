var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// app.set('view engine','ejs');
express.static('./views')
app.listen(3000, function() {
  console.log('server start!')
});

var routes = require('./routes')(app);
