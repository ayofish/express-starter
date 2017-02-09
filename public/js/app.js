(function() {
    'use strict';
    angular.module('expressStarter', [
            'ngResource',
            'ngSanitize',
            'ngRoute'
        ])
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'js/main/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);
        });
})();
