JT.directive('header', ['$location', '$document', function($location, $document) {
	return {
		restrict: 'AE',
		templateUrl: 'app/common/header/headerView.html',

		link: function($scope, $element, $attrs) {

			// Reference to the animated header background element
			var headerBackground = $element.children('.headerBackground');

			// If the location is anything other than 'home', add the 'small' class
			headerBackground.toggleClass('small', ($location.path() != '/home') );

			// Monitor the location for changes and update the class accordingly
			$scope.$on('$locationChangeStart', function(event) {
				headerBackground.toggleClass('small', ($location.path() != '/home') );
			});

		}
	}
}]);