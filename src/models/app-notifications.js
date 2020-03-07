const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    product: String,
    creationDate: {type: Date, default: Date.now},
	sentDate: {type: Date, default: null},
	state: String,
	message: {		
		to: String,
		cc: String,
		cco: String,
		subject: String,		
		html: String,
		attachments: [{
			path: String
		}]
    }
    
},{
    versionKey: false
});

module.exports = mongoose.model('app.notifications', schema);
