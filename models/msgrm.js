var mongoose = require('mongoose');

//msgrm schema
var msgrmSchema = mongoose.Schema({
    roomno:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }

});
//to access outside
var Msgrm = module.exports = mongoose.model('Msgrm', msgrmSchema);

//get Msgrms
module.exports.getMsgrms = function(callback, limit){
    Msgrm.find(callback).limit(limit);
};
