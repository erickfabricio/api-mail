const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: String,
    name : String,
    user : String,    
    mail : String,
    password : String,
    description : String,
    date : {type: Date, default: Date.now},
    state : String
},{
    versionKey: false
});

module.exports = mongoose.model('users', schema);
