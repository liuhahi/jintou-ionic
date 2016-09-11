appServices.factory('spaceService', function () {

    var service = {};
    var current = {};

    //get current , return resolved user
    service.getCurrent = function (data) {

        if (data) {
            this.findSpace(data).then(function (space) {
                current = space;
                return current;
            })
        } else {
            if (current.hasOwnProperty('$promise')) {
                if (current.hasOwnProperty('$resolved') && current.$resolved === true) {
                    return current;
                } else {
                    return current.$promise;
                }
            }
        }

        return current;
    }

    service.setCurrent = function (space) {
        current = space;
    }

    return service;
});