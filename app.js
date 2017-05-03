const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//testing git commit + git push" 1234567
app.use(express.static(__dirname+'/client'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//get Msgrm
const messenger_room = require('./models/messenger_room')
//<3
//mongoose connect
mongoose.connect('mongodb://localhost/messenger');
const db = mongoose.connection;
//updated @ 3:24 25/4 ------------------------------------------------------
/* problems here i dunno what is this when looking at bookstore, if you see it you may wanna tell me haha
 app.all('*', function(req, res, next) {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
 res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
 // intercept OPTIONS method
 if ('OPTIONS' == req.method) {
 res.send(200);
 }
 else {
 next();
 }
 });
 */
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

// get room by id:
app.get('/api/messenger_rooms/:_id', (req, res)=>{
    messenger_room.get_messenger_room_by_ID(req.params._id, (err, book)=>{
        if(err){
            throw err;
        }
        res.json(messenger_room);
    })

});

//app/post room
app.post('/api/messenger_rooms', (req,res)=>{
    const body = req.body
    const {room_number} = body
    const new_messenger_room={
        room_number:room_number
    }
    messenger_room.add_messenger_room(new_messenger_room, (err, new_messenger_room)=>{
        if(err){
            throw err;
        }
        res.json(new_messenger_room);
    });
});
//update needed?
/*
 app.put('/api/messenger_rooms/:_id', (req, res) =>{
 var id = req.params._id;
 var messenger_room = req.body;
 messenger_room.update_messenger_room(id, messenger_room, {}, (err, messenger_room) =>{
 if(err){
 throw err;
 }
 res.json(messenger_room);
 });
 });
 */

//delete room
app.delete('/api/messenger_rooms/:_id', (req, res)=>{
    var id = req.params._id;
    messenger_room.remove_messsenger_room(id, (err, messenger_room)=>{
        if(err){
            throw err;
        }
        res.json(messenger_room);
    });
});

app.listen(3009);
console.log('Running on port 3009');
//testing 123