appServices.factory('Auth', function ($q, $rootScope, Util, BUser, $location, $localStorage) {

  var isAuthenticated = false;
  var authToken;

  var safeCb = Util.safeCb;
  var currentUser = {};
  //   var userRoles = appConfig.userRoles || [];

  if ($localStorage.Token && $location.path() !== '/logout') {
    currentUser = BUser.getCurrent();
  }

  function loadUserCredentials() {
    //  var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    var token = $localStorage.token;
    if (token) {
      useCredentials(token);
    }
  }

  function storeUserCredentials(token) {
    $localStorage.Token = token;
    useCredentials(token);
  }

  function useCredentials(token) {
    isAuthenticated = true;
    authToken = token;
  }

  function destroyUserCredentials() {
    authToken = undefined;
    isAuthenticated = false;
    // $http.defaults.headers.common.Authorization = undefined;
    // window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }

  var register = function (userData, callback) {
    return BApi.user.create(userData).then(function (res) {
      storeUserCredentials(res.data.token);
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
    return BApi.auth.local(loginData)
      .then(function (res) {
        storeUserCredentials(res.data.token);
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

  var logout = function () {
    destroyUserCredentials();
  };

  loadUserCredentials();

  return {
    login: login,
    register: register,
    logout: logout,
    isAuthenticated: function () { return isAuthenticated; },
    currentUser: function () { return currentUser; },
  };
});