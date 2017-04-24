var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//get Msgrm
Msgrm = require('./models/msgrm');

//mongoose connect
mongoose.connect('mongodb://localhost/messenger');
var db = mongoose.connection;


//handling request with get put post delete (all kinds of http req)
//so when ppl visit this '/' the function will run
app.get('/', function(req, res){
    res.send('You should use /api/msgrms or /api/msgrID ');

});
//getting rooms info., now go msgrm.js
app.get('/api/msgrms', function(req, res){
    Msgrm.getMsgrms(function(err, msgrms){
        if(err){
            throw err;
        }
        res.json(msgrms);
    })
});


app.listen(3009);
console.log('Running on port 3009');
