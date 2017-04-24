var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/about');

    $stateProvider

        // Home View
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homePage.html'
        })

    // Home View
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homePage.html'
        })

        // my website viwe
        .state('web', {
            url: '/web',
            templateUrl: 'templates/cinthia.html'
        });

});
