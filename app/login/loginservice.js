/**
 * Login Service.
 *
 * Manages the login state of the application and interacts with a stubbed login service.
 *
 * All other web services would inject the LoginService and use the session token as a parameter to the service call.
 *
 * To make this call actual register and login services, inject $resource (and include ngResource in the app module dependencies), then uncomment the code.
 *
 * User: luke
 * Date: 7/04/13
 * Time: 11:26 AM
 */
function LoginService(){
//        var userApi = $resource(
//            'services/user/:service',
//            [],
//            {
//                register: {
//                    method: 'POST',
//                    params: {
//                        service: 'register'
//                    }
//                },
//                login: {
//                    method: 'POST',
//                    params: {
//                        service: 'login'
//                    }
//                }
//            }
//        );
    var loggedIn = false;
    var currentUsername = "";
    var sessionToken = null;

    return {
        amILoggedIn:function () {
            return loggedIn;
        },
        getCurrentUsername:function () {
            return currentUsername;
        },
        getCurrentSessionToken:function () {
            return sessionToken;
        },
        logout:function () {
            loggedIn = false;
            currentUsername = "";
            sessionToken = "";
        },
        register:function (username, password, passwordValidate, callbackOnComplete) {
            if (!username || username == "") {
                callbackOnComplete(false, {result:'UsernameEmpty', error:'Username cannot be empty'});
            } else if (!password || password == "") {
                callbackOnComplete(false, {result:'PasswordsEmpty', error:'Password cannot be empty'});
            } else if (password != passwordValidate) {
                callbackOnComplete(false, {result:'PasswordsSame', error:'Passwords are not the same'});
            } else {
                //stubbed out result
                var data = {
                    result:'Success',
                    sessionToken:'5160eb04e4b0f6fc28e6d4d2'
                };

//                    userApi.register({
//                        username: username,
//                        password: password
//                    }, function(data){
                if (data && data != "") {
                    loggedIn = true;
                    currentUsername = username;
                    sessionToken = data.sessionToken;
                    callbackOnComplete(data.result == 'Success', data);
                } else {
                    callbackOnComplete(false, {result:'NoData'});
                }
//                    }, function(error){
//                        callbackOnComplete(false, {result:'HTTPError', httpError: error});
//                    });
            }
        },
        login:function (username, password, callbackOnComplete) {
            if (!username || username == "") {
                callbackOnComplete(false, {result:'UsernameEmpty', error:'Username cannot be empty'});
            } else if (!password || password == "") {
                callbackOnComplete(false, {result:'PasswordsEmpty', error:'Password cannot be empty'});
            } else {
                //stubbed out result
                var data = {
                    result:'Success',
                    sessionToken:'5160eb04e4b0f6fc28e6d4d2'
                };

//                    userApi.login({
//                        username: username,
//                        password: password
//                    }, function(data){
                if (data && data != "") {
                    loggedIn = true;
                    currentUsername = username;
                    sessionToken = data.sessionToken;
                    callbackOnComplete(data.result == 'Success', data);
                } else {
                    callbackOnComplete(false, {result:'NoData'});
                }
//                    }, function(error){
//                        callbackOnComplete(false, {result:'HTTPError', httpError: error});
//                    });
            }
        }
    }
};

