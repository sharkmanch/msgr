const mongoose = require('mongoose');

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
