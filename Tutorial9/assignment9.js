const operations = require('./operations.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index', {});
});

app.post('/calculate', function(req, res) {
    let result = operations.calculate(req.body);
    let data = operations.format(req.body, result);
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
});

app.listen(8080);
