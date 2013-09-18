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
    directive('zensgrafs', function($timeout) {
        return {
            restrict: 'E',
            templateUrl: '/views/partial/grafs.html',
            link: function(scope, element, attrs) {
                $timeout( function(){
                    scope.sensors.plot('e1');
                }, 100);
            },
            replace: true
        };
    }).
    directive('zensgraf', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                sensorName : '@',
                grafId: '@'
            },
            templateUrl: '/views/partial/graf.html',
            replace: true
        };
    });

