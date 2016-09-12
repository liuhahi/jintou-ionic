appServices.factory('BSpace', function () {

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
            return this.findSpace(data).then(function (space) {
                current = space;
                return $q.when(current);
            })
        })
    }

    //return promise
    service.findSpace = function (findData) {

    }

    //return a promise
    var loadConfig = function (path) {
        return $http.get("templates/blyn/core/space/config.json").then(function (oConfig) {
            config = oConfig;
        })
    }

    return service;
});