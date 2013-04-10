/**
 * Home page controller.
 *
 * User: luke
 * Date: 8/04/13
 * Time: 4:57 AM
 */
define([],
    function () {
        return function ($scope, LoginService) {
            $scope.loggedIn = false;
            $scope.loggedInUsername = "";

            $scope.$watch(function () {
                return LoginService.amILoggedIn();
            }, function (value) {
                $scope.loggedIn = value;
                if (value) {
                    $scope.loggedInUsername = LoginService.getCurrentUsername();
                } else {
                    $scope.loggedInUsername = "";
                }
            });
        };
    }
);
