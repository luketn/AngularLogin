define(function () {
    return function ($scope, dialog, LoginService) {
        $scope.showUsernameError = false;
        $scope.usernameErrorMessage = "";
        $scope.showPasswordError = false;
        $scope.passwordErrorMessage = "";
        $scope.register = function () {
            LoginService.register($scope.username, $scope.password, $scope.passwordValidate, function (succeeded, info) {
                $scope.showUsernameError = false;
                $scope.showPasswordError = false;
                if (succeeded) {
                    dialog.close();
                } else {
                    if (info.result == 'PasswordsSame' || info.result == 'PasswordsEmpty') {
                        $scope.showPasswordError = true;
                        $scope.passwordErrorMessage = info.error;
                    } else {
                        $scope.showUsernameError = true;
                        $scope.usernameErrorMessage = info.error;
                    }
                }
            });
        };
        $scope.close = function () {
            dialog.close();
        };
    }
});