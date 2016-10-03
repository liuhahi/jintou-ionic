angular.module('starter')
    .config(function ($urlRouterProvider, $stateProvider) {

        $stateProvider
            .state('public.dashboard', {
                url: "/dashboard",
                params: {
                    isAnimated: false
                },
                views: {
                    'publicContent': {
                        templateUrl: "templates/blyn/core/public/html/dashboard.html",
                        controller: 'publicDashboardCtrl'
                    }
                }
            })
            .state('public.login', {
                url: "/login",
                params: {
                    isAnimated: false
                },
                views: {
                    'publicContent': {
                        templateUrl: "templates/blyn/core/public/html/login.html",
                        controller: 'authCtrl'
                    }
                }
            })
            .state('public.signup', {
                url: "/signup",
                params: {
                    isAnimated: false
                },
                views: {
                    'publicContent': {
                        templateUrl: "templates/blyn/core/public/html/signup.html",
                        controller: 'authCtrl'
                    }
                }
            })
            
    })