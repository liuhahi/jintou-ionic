// Controller of catalog Page.
appControllers.controller('authCtrl', function ($scope, $mdToast, $mdDialog, $ionicPopup, AuthService, $state) {

    $scope.user = {
        loginId: '',
        password: ''
    };

    $scope.login = function () {
        //    alert("authCtrl login: " + $scope.user.loginId + ", " + $scope.user.password);

        AuthService.login($scope.user).then(function (data) {
            $state.go('user.dashboard', {}, {reload:'user'});            

        }, function (errMsg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: errMsg
            });
        });

    }

    $scope.signup = function () {
        AuthService.register($scope.user).then(function (msg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Register success!',
                template: msg
            });
            $state.go('user.login');
        }, function (errMsg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Register failed!',
                template: errMsg
            });
        });
    };


});// End of auth controller.