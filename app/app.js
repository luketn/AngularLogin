/**
 * Application Module for the Login Demo Site
 *
 * User: luke
 * Date: 7/04/13
 * Time: 10:38 AM
 */
var app = angular
    .module("login", ['ui.bootstrap'])
    .config(function($routeProvider) {
        $routeProvider.
            when('/', {controller:dummyController, templateUrl:'app/home/home.html'}).
            when('/change', {controller:dummyController, templateUrl:'app/change/change.html'}).
            when('/history', {controller:dummyController, templateUrl:'app/history/history.html'}).
            when('/about', {controller:dummyController, templateUrl:'app/about/about.html'}).
            otherwise({redirectTo:'/'});
    })
    .service('LoginService', LoginService);

function dummyController(){

}
