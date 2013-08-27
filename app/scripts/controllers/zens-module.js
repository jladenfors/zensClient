app.directive('zenshead', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: '/views/partial/head.html',
        replace: true
    };
}).
    directive('zensnav', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: '/views/partial/nav.html',
            replace: true
        };
    }).
    directive('zensgrafs', function() {
        return {
            restrict: 'E',
            templateUrl: '/views/partial/grafs.html',
            replace: true
        };
    }).
    directive('zensgraf', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                sensorName : '@',
                popluateSensor : '&?',
                grafId: '@'
            },
            link: function(scope, element, attrs) {
                scope.popluateSensor({sensor: 'e1'});

            },
            templateUrl: '/views/partial/graf.html',
            replace: true
        };
    });

