/**
 * Application Module for the Login Demo Site
 *
 * User: luke
 * Date: 7/04/13
 * Time: 10:38 AM
 */
define(['components/home/home', 'components/navbar/navbar', 'components/login/loginservice', 'lib/angular.bootstrap.min'],
    function (HomeController, NavBarDirective, LoginService) {

        return angular.module("login", ['ui.bootstrap'])
                      .config(function ($routeProvider) {
                          $routeProvider.
                              when('/', {controller:HomeController, templateUrl:'app/components/home/home.html'}).
                              when('/change', {templateUrl:'app/components/change/change.html'}).
                              when('/history', {templateUrl:'app/components/history/history.html'}).
                              when('/about', {templateUrl:'app/components/about/about.html'}).
                              otherwise({redirectTo:'/'});
                      })
                      .directive('fuNavBar', NavBarDirective)
                      .service('LoginService', LoginService);
    }
);
