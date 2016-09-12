angular.module('starter')
    .config(function ($urlRouterProvider,$stateProvider) {
        
        $urlRouterProvider.when(
            '#/user/space/app/role',
            '#/user/space/app/role/home');

        $stateProvider
            .state('user.space.app.role', {
                url: "/role",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/role/html/home.html",
                        controller: 'appHomeCtrl'
                    }
                }
            })
            .state('user.space.app.role.home', {
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