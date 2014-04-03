// Create a new module
var feed = angular.module('feed', []);

feed.config(function($locationProvider) {
    $locationProvider.hashPrefix('!');
});

feed.factory('Commit', function($resource) {
    var Commit = $resource('https://api.github.com/repos/angular/angular.js/commits/:sha',
                        {}, {
                        'get': {method:'GET'},
                        'query': {method: 'GET', isArray:true}
                        });
                        
    Commit.prototype.getDate = function() {
    // It seems we have to handle the case where the resource isn't loaded yet?
    // (defensive programming)
        var date ="";
        if (this.commit) {
            date = new Date(this.commit.author.date);
        }
        return date;        
    }
                        
    return Commit;
});
