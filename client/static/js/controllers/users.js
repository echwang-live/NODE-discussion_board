myApp.controller('UsersController', function(UserFactory, $location){
	var _this = this;


	// development hardcode
	this.ctrl_user = {name:"Eric"};

	// production code
	this.ctrl_user = {};

	this.login = function(){
		console.log(this.userInfo);
		this.errors = {};
		UserFactory.loginUser(this.userInfo, function(factory_data){
			if(factory_data.message){
				_this.errors = factory_data.errors.name.message;
			}else{
				_this.ctrl_user = factory_data;

				console.log('changing path');
				$location.path('/dashboard');
			}
		})
	}

})