angular.module('starter')
    .config(function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.when(
            '#/user',
            '#/user/dashboard');

        $urlRouterProvider.when(
            '#/user/public',
            '#/user/public/dashboard');

        $stateProvider
            .state('user.public', {
                url: "/public",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/public.html",
                        controller: 'publicCtrl'
                    }
                }
            })
            .state('user.login', {
                url: "/login",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/login.html",
                        controller: 'authCtrl'
                    }
                }
            })
            .state('user.signup', {
                url: "/signup",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/signup.html",
                        controller: 'authCtrl'
                    }
                }
            })
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