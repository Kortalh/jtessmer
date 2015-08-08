JT.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'app/components/home/homeView.html',
			controller: 'homeCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
}]);