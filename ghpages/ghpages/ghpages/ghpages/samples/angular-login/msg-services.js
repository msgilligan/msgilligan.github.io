// Create a new module
var msg = angular.module('msg', []);

msg.config(function($locationProvider) {
  // Configure existing providers
  $locationProvider.hashPrefix('!');
//  $locationProvider.html5mode(true);
});

msg.factory('login', function($q, $http, $rootScope, $window) {
    function msglogin() {
    }
    var self = msglogin;
    $rootScope.username = $.cookie("username");
    $rootScope.loggedIn = false;
       
    msglogin.login = function(user, passwd) {
		var url = "login.json";
        var deferred = $q.defer();
        $.cookie("username", null);         // delete username cookie
		$http({
		    "method": 'GET',
		    "url": url,
		}).success(function(data, status, headers, config) {
            $rootScope.loggedIn = true;
            $rootScope.username = user;
            $.cookie("username", user, { expires: 30 });
            $rootScope.$broadcast('login');
            deferred.resolve(data);
        }).error(function(data, status, headers, config) {
            $rootScope.loggedIn = false;
            deferred.reject("Login Err: " + status);
        });
        return deferred.promise;
    }
    
    msglogin.logout = function() {
        $rootScope.loggedIn = false;
        $rootScope.username = null;
    }

    msglogin.cancel = function() {
    }
    
    return msglogin;
});

msg.factory('Hello', function($resource) {
    return $resource('hello.json');
}, {});
