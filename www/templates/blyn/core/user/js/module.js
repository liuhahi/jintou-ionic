angular.module('starter')
    .config(function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.when(
            '#/user',
            '#/user/dashboard');

        $stateProvider
            .state('user.dashboard', {
                url: "/dashboard",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/user_dashboard.html",
                        controller: 'userDashboardCtrl'
                    }
                }
            })
            .state('user.profile', {
                url: "/profile",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/profile.html",
                        controller: 'userProfileCtrl'
                    }
                }
            })
            
    })