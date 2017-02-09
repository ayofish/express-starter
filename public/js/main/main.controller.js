(function() {
	'use strict';
	angular.module('expressStarter')
		.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
			$http.get('/api/things')
				.then(response => {
					this.things = response.data;
				});
		}]);
})();
