/**
 * Navigation bar directive.
 *
 * User: luke
 * Date: 7/04/13
 * Time: 11:01 AM
 */
define(['components/login/login', 'components/login/register'],
    function (LoginController, RegisterController) {
        return function ($location, $dialog, LoginService) {
            return {
                restrict:'A',
                templateUrl:'app/components/navbar/navbar.html',
                replace:true,
                controller:function ($scope) {
                    var loggedInMenus = [
                        {class:'active', url:'/', name:'Home'},
                        {url:'/change', name:'Change'},
                        {url:'/history', name:'History'},
                        {url:'/about', name:'About'}
                    ];
                    var preLoggedInMenus = [
                        {class:'active', url:'/', name:'Home'},
                        {url:'/about', name:'About'}
                    ];

                    $scope.menus = preLoggedInMenus;

                    $scope.loggedIn = false;
                    $scope.currentUsername = "";

                    $scope.$watch(function () {
                        return $location.path();
                    }, function () {
                        var path = $location.path();
                        $.each($scope.menus, function (index, value) {
                            value.class = (path == value.url) ? 'active' : '';
                        });
                    });

                    $scope.login = function () {
                        var options = {
                            backdrop:true,
                            keyboard:true,
                            backdropClick:true,
                            templateUrl:'app/components/login/login.html',
                            controller:LoginController
                        };
                        var dialog = $dialog.dialog(options);
                        dialog.open();
                    };

                    $scope.register = function () {
                        var options = {
                            backdrop:true,
                            keyboard:true,
                            backdropClick:true,
                            templateUrl:'app/components/login/register.html',
                            controller:RegisterController
                        };
                        var dialog = $dialog.dialog(options);
                        dialog.open();
                    };

                    $scope.logout = function () {
                        LoginService.logout();
                    };

                    $scope.$watch(function () {
                        return LoginService.amILoggedIn();
                    }, function (value) {
                        $scope.loggedIn = value;
                        $scope.currentUsername = LoginService.getCurrentUsername();
                        if (value) {
                            $scope.menus = loggedInMenus;
                        } else {
                            $scope.menus = preLoggedInMenus;
                        }
                    });
                }
            };
        }
    }
);

