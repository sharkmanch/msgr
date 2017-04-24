const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//get Msgrm
const messenger_room = require('./models/messenger_room')

//mongoose connect
mongoose.connect('mongodb://localhost/messenger');
const db = mongoose.connection;

//handling request with get put post delete (all kinds of http req)
//so when ppl visit this '/' the function will run
app.get('/', (req, res)=>{
    res.send('You should use /api/messenger_rooms ');
});
//getting rooms info., now go messenger_room.js
app.get('/api/messenger_rooms', (req, res)=>{
    messenger_room.get_messenger_rooms((err, messenger_rooms)=>{
        if(err){
            throw err;
        }
        res.json(messenger_rooms);
    })
});


app.listen(3009);
console.log('Running on port 3009');
