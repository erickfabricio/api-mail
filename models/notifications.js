const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    product: String,
    date: {type: Date, default: Date.now},
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
