JT.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/about', {
			templateUrl: 'app/components/about/aboutView.html',
			controller: 'aboutController'
		})
		.when('/blog', {
			templateUrl: 'app/components/blog/blogView.html',
			controller: 'blogController'
		})
		.when('/contact', {
			templateUrl: 'app/components/contact/contactView.html',
			controller: 'contactController'
		})
		.when('/home', {
			templateUrl: 'app/components/home/homeView.html',
			controller: 'homeController'
		})
		.when('/work', {
			templateUrl: 'app/components/work/workView.html',
			controller: 'workController'
		})
		.when('/workDetails', {
			templateUrl: 'app/components/workDetails/workDetailsView.html',
			controller: 'workDetailsController'
		})
		.otherwise({
			redirectTo: '/home'
		});

	$locationProvider.html5Mode({
		enabled: true,
		baseRequired: false
	});

}]);