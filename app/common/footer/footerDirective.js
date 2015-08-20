JT.directive('footer', function() {
	return {
		restrict: 'AE',
		templateUrl: 'app/common/footer/footerView.html',
		controller: ['$scope', '$filter', function($scope, $filter) {
			// Nothing
		}]
	}
});