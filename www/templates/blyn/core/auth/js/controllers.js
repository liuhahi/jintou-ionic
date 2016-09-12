// Controller of catalog Page.
appControllers.controller('authCtrl', function ($scope, $mdToast, $mdDialog, $ionicPopup, Auth, $state) {

    $scope.user = {
        loginId: '',
        password: ''
    };

    $scope.login = function () {
        //    alert("authCtrl login: " + $scope.user.loginId + ", " + $scope.user.password);

        Auth.login($scope.user).then(function (data) {
            //  $state.go('myspaces');
            alert("success");

        }, function (errMsg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: errMsg
            });
        });

    }

    $scope.signup = function () {
        Auth.register($scope.user).then(function (msg) {
            $state.go('app.login');
            var alertPopup = $ionicPopup.alert({
                title: 'Register success!',
                template: msg
            });
        }, function (errMsg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Register failed!',
                template: errMsg
            });
        });
    };


});// End of auth controller.