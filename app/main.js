/**
 * RequireJS main initializer.
 *
 * User: luke
 * Date: 10/04/13
 * Time: 7:53 PM
 */
require.config({
    map:{
        '*':{
            'css':'lib/css'
        }
    },
    paths:{
        jquery:'lib/jquery.min',
        angular:'lib/angular.min',
        bootstrap:'lib/bootstrap.min'
    },
    baseUrl:'app'
});

require(['jquery', 'angular', 'bootstrap', 'css!lib/bootstrap.min'], function(){
    require(['app'],
        function (module) {
            //Bootstrap the app
            angular.element(document).ready(function () {
                angular.bootstrap(document, [module.name]);
            });
        }
    );
});
