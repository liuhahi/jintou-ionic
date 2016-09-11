angular.module('starter')
    .config(function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.when(
            '/user',
            '/user/dashboard');

        $urlRouterProvider.when(
            '/public',
            '/public/dashboard');

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
                        controller: 'loginCtrl'
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
                        controller: 'signupCtrl'
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