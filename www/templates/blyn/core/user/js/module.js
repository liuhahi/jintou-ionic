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
                        controller: 'userDashboardCtrl as vm'
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
                        controller: 'userProfileCtrl as vm'
                    }
                }
            })
             .state('user.trade', {
                url: "/trade",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/trade.html",
                        controller: 'userTradeCtrl as vm'
                    }
                }
            })
              .state('user.finance', {
                url: "/finance",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/finance.html",
                        controller: 'userFinanceCtrl as vm'
                    }
                }
            })
              .state('user.favorite', {
                url: "/favorite",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/favorite.html",
                        controller: 'userFavoriteCtrl as vm'
                    }
                }
            })
    })