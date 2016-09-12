appServices.factory('BUser', function ($q, $http) {

    var service = {};
    var current = {};
    var config = {};

    //get current , return resolved user
    service.getCurrent = function () {
        return current;
    }

    service.getConfig = function (path) {
        if (angular.isString(path)) {
            return config[path];
        } else {
            return config;
        }
    }

    //retunr promise
    service.setCurrent = function (userData) {
        var that = this;

        return loadConfig().then(function (config) {
            config = config;
        }).then(function () {
            return BApi.user.me().then(function (user) {
                current = user;
                return $q.when(current);
            });
        });
    }

    //return a promise
    var loadConfig = function (path) {
        return $http.get("templates/blyn/core/user/config.json").then(function (oConfig) {
            config = oConfig;
        })
    }

    return service;
});

