const mongoose = require('mongoose');
//newest update removed db collection - msgrms and replaced it with messenger_rooms for the updated react version.
/**
 * messenger room schema
 */
const messenger_room_schema = mongoose.Schema({
    room_number: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }

});

const messenger_room = mongoose.model('messenger_room', messenger_room_schema);
//to access outside
module.exports.messenger_room = messenger_room;

//get Msgrms
module.exports.get_messenger_rooms = (callback, limit) => {
    messenger_room.find(callback).limit(limit);
};
//--------------------------------------------------below = updated area 25/4 03:00am-------
//get room by id
module.exports.get_messenger_room_by_ID = (id, callback) =>{
    messenger_room.findById(id, callback);
}

//post or add room .
module.exports.add_messenger_room =  (body, callback) =>{
    messenger_room.create(body, callback);
}

//i dont think updating room is necessary, probably updating the roomname or room no. for fun
/*
module.exports.update_messenger_room = (id, messenger_room, options, callback) =>{
var query = {_id: id};
var update = {
       .......... things here to be confirmed.........
    room_number: messenger_room.room_number
}
messenger_room.findOneAndUpdate(query, update, options, callback);

 */
//delete rooms
module.exports.remove_messsenger_room = (id, callback) =>{
    var query = {_id:id};
    messenger_room.remove(query, callback);
}
