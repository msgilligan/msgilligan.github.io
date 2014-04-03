//'use strict';

// Create a new module
var bsd = angular.module('bsd', []);

bsd.config(function($locationProvider) {
    $locationProvider.hashPrefix('!');
});

function NavBarCtrl($scope) {
    $scope.testSearch = function(input) {
        alert(input);
    };
}
NavBarCtrl.$inject = ['$scope'];
