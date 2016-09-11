appServices.factory('userService', function () {

    var service = {};
    var current = {};

    //get current , return resolved user
    service.getCurrent = function () {

        if (current.hasOwnProperty('$promise')) {
            if (current.hasOwnProperty('$resolved') && current.$resolved === true) {
                return current;
            } else {
                return current.$promise;
            }
        }

        return current;
    }

    service.setCurrent = function(user){
        current = user;
    }


    return service;
});

appServices.factory('auth', function () {

    var service = {};
    var current = {};

    //get current , return resolved user
    service.login = function () {

    }

    service.logout = function(){
        
    }

    service.signup = function(){
        
    }


    return service;
});