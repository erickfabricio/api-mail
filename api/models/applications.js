const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    contact: String,
    description: String,
    creationDate: { type: Date, default: Date.now },
    state: String,
    tokens: [{
        token: String,
        payload: String,
        creationDate: { type: Date, default: Date.now },
        seconds: String,
        key: String,
        state: String        
    }]
}, {
        versionKey: false
    });

module.exports = mongoose.model('applications', schema);
