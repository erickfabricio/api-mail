const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    logs: [
        {
            user: String,
            action: String, //Read, Create, Update and Delete
            description: String,            
            entity: {},
            creationDate: { type: Date, default: Date.now }            
        }
    ],

    creationDate: { type: Date, default: Date.now },
    state: String
}, {
    versionKey: false
});

module.exports = mongoose.model('adm.logs', schema);
