var XORApp = angular.module('XORApp', ['ngRoute']);

XORApp.controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

    XORApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '../View/home.html',
        controller: 'HomeController'
    })
    .when('/Simulation', {
        templateUrl: '../View/Simulation/simulation.html',
        controller: 'SimulationController'
    })    
    .otherwise({
        redirectTo: '/'
    });

    //$locationProvider.html5Mode(true);
});