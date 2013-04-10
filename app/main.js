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
        //3rd party libraries
        jQuery:'lib/jquery.min',
        angular:'lib/angular.min',
        bootstrap:'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
        angularBootstrap:'lib/ui-bootstrap-tpls-0.2.0.min'
    },
    shim:{
        angular:{
            exports:'angular'
        },
        angularBootstrap:{
            deps:['jQuery', 'angular', 'bootstrap']
        },
        'app':{
            deps:[
                'components/login/login',
                'components/login/register',
                'components/login/loginservice',
                'angularBootstrap'
            ]
        }
    },
    priority:[
        'angular'
    ],
    baseUrl:'app'
});

//Bootstrap the app
requirejs(['app'],
    function (app) {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['login']);
        });
    }
);