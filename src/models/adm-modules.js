const mongoose = require('mongoose');
const Log = require('../models/adm-logs');

const schema = new mongoose.Schema({
    name: String,
    description: String,
    creationDate: { type: Date, default: Date.now },
    state: String
    //logs: [Log.schema]
}, {
    versionKey: false
});

module.exports = mongoose.model('adm.modules', schema);