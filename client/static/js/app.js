var myApp = angular.module('myApp', ['ngRoute', "ngMessages"]);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/static/partials/login.html'
	})
	.when('/dashboard', {
		templateUrl: '/static/partials/dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})