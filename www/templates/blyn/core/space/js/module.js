angular.module('starter')
    .config(function ($urlRouterProvider,$stateProvider) {
        
        $urlRouterProvider.when(
            '#/user/space',
            '#/user/space/home');

        $stateProvider
            .state('user.space.home', {
                url: "/home",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/space/html/home.html",
                        controller: 'spaceHomeCtrl'
                    }
                }
            })
    })