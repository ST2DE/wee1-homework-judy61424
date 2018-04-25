const express = require('express');
const app = express(); 

app.use(express.static(__dirname + '/public')); 

app.set('view engine', 'ejs');
app.get('/about_me', function (req, res) {
    res.render('index', { name: req.query.name });
});

app.get('/', function (req, res) {
    res.send("Who are <b>YOU!</b>");
});


app.listen(3000, function () {
    console.log('The server has been run on http://localhost:3000/');
});