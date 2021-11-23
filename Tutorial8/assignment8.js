const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/hello', (req, res) => res.send('hello world')); 

app.get('/form', function (req, res) {
   res.sendFile(__dirname + '/assignment8.html' );
});

app.post('/formdata', function(req, res){
    res.render('content', {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth
    });
});

app.post("/jsondata", function(req, res) {
    res.render('content', {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth
    });
});

app.listen(port, () => console.log(`Running at http://localhost:${port}`))