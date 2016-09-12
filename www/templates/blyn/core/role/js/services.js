appServices.factory('appService', function () {

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
    service.setCurrent = function (data) {
        var that = this;

        return loadConfig().then(function (config) {
            config = config;
            return this.findApp(data).then(function (app) {
                current = app;
                return $q.when(current);
            })
        })
    }

    //return promise
    service.findApp = function (findData) {

    }

    //return a promise
    var loadConfig = function (path) {
        return $http.get("templates/blyn/core/app/config.json").then(function (oConfig) {
            config = oConfig;
        })
    }

    return service;
});