/**
 * Navigation bar directive.
 *
 * User: luke
 * Date: 7/04/13
 * Time: 11:01 AM
 */
app.directive('fuNavBar', function($location, $dialog, LoginService){
    // The above name 'fuNavBar' will be parsed out as 'fu-nav-bar' for in-markup uses.
    return {
        restrict: 'A',
        templateUrl: 'app/navbar/navbar.html',
        replace: true,
        controller: function($scope) {
            var loggedInMenus = [
                {class:'active', url: '/', name: 'Home'},
                {url: '/change', name: 'Change'},
                {url: '/history', name: 'History'},
                {url: '/about', name: 'About'}
            ];
            var preLoggedInMenus = [
                {class:'active', url: '/', name: 'Home'},
                {url: '/about', name: 'About'}
            ];

            $scope.menus = preLoggedInMenus;

            $scope.loggedIn = false;
            $scope.currentUsername = "";

            $scope.$watch(function() {
                return $location.path();
            }, function(){
                var path = $location.path();
                $.each($scope.menus, function(index, value){
                    value.class = (path == value.url) ? 'active' : '';
                });
            });

            $scope.login = function(){
                var options = {
                    backdrop: true,
                    keyboard: true,
                    backdropClick: true,
                    templateUrl: 'app/login/login.html',
                    controller: 'LoginController'
                };
                var dialog = $dialog.dialog(options);
                dialog.open();
            };

            $scope.register = function(){
                var options = {
                    backdrop: true,
                    keyboard: true,
                    backdropClick: true,
                    templateUrl: 'app/login/register.html',
                    controller: 'RegisterController'
                };
                var dialog = $dialog.dialog(options);
                dialog.open();
            };

            $scope.logout = function(){
                LoginService.logout();
            };

            $scope.$watch(function(){
                return LoginService.amILoggedIn();
            }, function(value){
                $scope.loggedIn = value;
                $scope.currentUsername = LoginService.getCurrentUsername();
                if( value ){
                    $scope.menus = loggedInMenus;
                }else{
                    $scope.menus = preLoggedInMenus;
                }
            });
        }
    };
});

