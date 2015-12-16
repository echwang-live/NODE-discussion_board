var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res){
		res.render('index.html');
	},
	login: function(req, res){
		User.findOne({ name: req.body.name }, function(err, user ){
			if(user){
				console.log('Found user - ', user);
				res.json(user);
			}
			else if(!user){
				console.log('User does not exist, create the user');
				var newUser = new User({ name: req.body.name });
				
				newUser.save(function(err){
					if(err){
						console.log(err);
						res.json(err);
					}else{
						console.log('new user created - ', newUser);
						res.json(newUser);
					}
				})
			}
		})
	},
}