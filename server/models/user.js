var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 2, maxlength: 20 },
	created_at: {type: String, default: Date() }
});

mongoose.model('User', UserSchema)