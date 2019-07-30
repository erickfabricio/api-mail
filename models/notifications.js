const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    product: String,
    creationDate: {type: Date, default: Date.now},
	sentDate: {type: Date, default: null},
	state: String,
	message: {
		from: String,
		to: String,
		cc: String,
		subject: String,		
		html: String,
		attachments: [String]
    }
    
},{
    versionKey: false
});

module.exports = mongoose.model('notifications', schema);
