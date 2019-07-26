const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    service : String,
    name : String,
    user : String,
    domain : String,
    mail : String,
    password : String,
    description : String,
    date : String,
    state : String    
},{
    versionKey: false
});

schema.methods.toString = function () {    
    return this.mail;
};

module.exports = mongoose.model('products', schema);
