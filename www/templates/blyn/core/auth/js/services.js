
appServices.factory('AuthService', function ($q, $rootScope, BApi, Util,BUser, $http, $location, API_ENDPOINT, localStorage) {

  var isAuthenticated = false;
  var authToken;

  var safeCb = Util.safeCb;
  var currentUser = {};
  //   var userRoles = appConfig.userRoles || [];
  $rootScope.current = $rootScope.current || {};

  if (localStorage.get("Token") && $location.path() !== '/logout') {
    currentUser = BUser.getCurrent();
  }

  function loadUserCredentials() {
    //  var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    var token = localStorage.get("Token");
    if (token) {
      useCredentials(token);
    }
  }

  function storeUserCredentials(token) {
    localStorage.set("Token", token);
    useCredentials(token);
  }

  function useCredentials(token) {
    isAuthenticated = true;
    authToken = token;
  }

  function destroyUserCredentials() {
    localStorage.set("Token", null);
    authToken = null;
    isAuthenticated = false;
    // $http.defaults.headers.common.Authorization = undefined;
    // window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }

 
  var register = function (userData, callback) {
    return BApi.user.create(userData).$promise.then(function (res) {
      storeUserCredentials(res.token);
      return BUser.setCurrent();
    }).then(function (user) {    
      safeCb(callback)(null, user);
      return user;
    })
      .catch(function (err) {
        logout();
        safeCb(callback)(err.data);
        return $q.reject(err.data);
      });
  }

  var login = function (loginData, callback) {
    return BApi.auth.local(loginData).$promise
      .then(function (res) {
        storeUserCredentials(res.token);
        return BUser.setCurrent();
      }).then(function (user) {        
        $rootScope.$broadcast('event:login');  
        safeCb(callback)(null, user);
        return user;
      })
      .catch(function (err) {
        logout();
        safeCb(callback)(err.data);
        return $q.reject(err.data);
      });
  }

  var logout = function () {
   
    destroyUserCredentials();
      $rootScope.$broadcast('event:logout');  
  };

  //loadUserCredentials();

  return {
    login: login,
    register: register,
    logout: logout,
    isAuthenticated: function () { loadUserCredentials(); return isAuthenticated; },
    currentUser: function () { return currentUser; },
  };
})


