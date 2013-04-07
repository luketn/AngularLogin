app.controller('LoginController', function ($scope, dialog, LoginService) {
    $scope.showUsernamePasswordError = false;
    $scope.usernamePasswordErrorMessage = "";
    $scope.login = function () {
        LoginService.login($scope.username, $scope.password, function (succeeded, info) {
            if (succeeded) {
                $scope.showUsernamePasswordError = false;
                dialog.close();
            } else {
                $scope.showUsernamePasswordError = true;
                $scope.usernamePasswordErrorMessage = info.error;
            }
        });
    };
    $scope.close = function () {
        dialog.close();
    };
});