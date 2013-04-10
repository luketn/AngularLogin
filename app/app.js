/**
 * Application Module for the Login Demo Site
 *
 * User: luke
 * Date: 7/04/13
 * Time: 10:38 AM
 */
define(['components/home/home', 'components/navbar/navbar', 'components/login/loginservice', 'css!appcss/app', 'css!http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min'],
    function (HomeController, NavBarDirective, LoginService) {
        function DummyController() {

        }
        return angular
            .module("login", ['ui.bootstrap'])
            .config(function ($routeProvider) {
                $routeProvider.
                    when('/', {controller:HomeController, templateUrl:'app/components/home/home.html'}).
                    when('/change', {controller:DummyController, templateUrl:'app/components/change/change.html'}).
                    when('/history', {controller:DummyController, templateUrl:'app/components/history/history.html'}).
                    when('/about', {controller:DummyController, templateUrl:'app/components/about/about.html'}).
                    otherwise({redirectTo:'/'});
            })
            .directive('fuNavBar', NavBarDirective)
            .service('LoginService', LoginService);
    }
);
