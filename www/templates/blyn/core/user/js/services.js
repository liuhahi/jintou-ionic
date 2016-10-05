appServices.factory('BUser', function ($q, $http, BApi) {

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

    //return promise
    service.setCurrent = function (userData) {
        var that = this;

        return loadConfig()
            .then(function () {
                return loadMine();
            })
            .then(function (user) {
                return loadMySpaces();
            })
            .then(function () {
                //always return promise
                return $q.when(current);
            });
    }

    //return a promise
    var loadConfig = function (path) {
        return $http.get("templates/blyn/core/user/config.json").then(function (oConfig) {
            config = oConfig.data;
        })
    }

    //return promise
    var loadMine = function () {
        return BApi.user.me().$promise.then(function (user) {
            current = user;
            return $q.when(user);
        });
    }

    //return promise
    var loadMySpaces = function () {
        return BApi.space.getUserSpaces().$promise.then(function (spaces) {
            current.spaces = spaces;
            return $q.when(spaces);
        })
    }

    service.getPersonSpace = function () {
        var mySpaces = current.spaces;

        if (current.personSpace && current.personSpace != null) {
            return current.personSpace;
        } else {
            var spaces = [];
            mySpaces.forEach(function (space) {
                if (space.type.name.indexOf('person.') === 0) {
                    current.personSpace = space;
                } else {
                    spaces.push(space);
                }
            })
            current.mySpaces = spaces;
        }
    }

    //return all spaces except person space
    service.getMySpaces = function () {
        if (current.mySpaces) {
            return current.mySpaces;
        } else {
            this.getPersonSpace();
            return current.mySpaces;
        }
    }

    return service;
});

