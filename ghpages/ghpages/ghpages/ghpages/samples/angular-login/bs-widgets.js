// bs-widgets.js - widgets for integrating Bootstrap.css/Bootstrap.js features into Angular
//
angular.directive('bs:popover', function(expression, compiledElement){
    return function(linkElement) {
        linkElement.popover();
    };
});

angular.directive('bs:modal', function(expression, compiledElement){
    return function(linkElement) {
        linkElement.modal({backdrop: "static", keyboard: true});
    };
});

