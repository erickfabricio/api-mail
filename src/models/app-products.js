const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    service : String,
    name : String,
    user : String,
    domain : String,
    mail : String,
    password : String,
    description : String,
    date : {type: Date, default: Date.now},
    state : String
},{
    versionKey: false
});

module.exports = mongoose.model('app.products', schema);
