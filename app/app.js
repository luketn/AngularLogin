/**
 * Application Module for the Login Demo Site
 *
 * User: luke
 * Date: 7/04/13
 * Time: 10:38 AM
 */
angular
    .module("login", ['ui.bootstrap'])
    .config(function($routeProvider) {
        $routeProvider.
            when('/', {controller:HomeController, templateUrl:'app/home/home.html'}).
            when('/change', {controller:DummyController, templateUrl:'app/change/change.html'}).
            when('/history', {controller:DummyController, templateUrl:'app/history/history.html'}).
            when('/about', {controller:DummyController, templateUrl:'app/about/about.html'}).
            otherwise({redirectTo:'/'});
    })
    .service('LoginService', LoginService)
    .directive('fuNavBar', fuNavBarDirective);

function DummyController(){

}
