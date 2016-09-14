angular.module('starter')
    .config(function ($stateProvider) {
        $stateProvider
            .state('user.space.app.circle', {
                url: "/circle",
                params: {
                    isAnimated: false,
                    nutId: null
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/circle/html/main.html",
                        controller: 'circleCtrl'
                    }
                },
                resolve: {
                    currentApp: function ($stateParams, $q, circleService) {
                        if ($stateParams.nutId) {
                            return circleService.getCurrent(nutId);
                        }
                    }
                }
            })
    })