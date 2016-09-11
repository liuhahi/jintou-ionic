angular.module('starter')
    .config(function ($urlRouterProvider,$stateProvider) {
        
        $urlRouterProvider.when(
            '/user/space/app',
            '/user/space/app/home');

        $stateProvider
            .state('user.space.app.home', {
                url: "/home",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/app/html/home.html",
                        controller: 'appHomeCtrl'
                    }
                }
            })
    })