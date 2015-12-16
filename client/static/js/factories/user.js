myApp.factory('UserFactory', function($http){
	var factory = {};
	var factory_user = {};
	factory.loginUser = function(info, callback){
		console.log('what is info?', info);
		$http.post('/users', info).success(function(DB_data){
			factory_user = DB_data;
			callback(factory_user);
		});
	}



	return factory;
})