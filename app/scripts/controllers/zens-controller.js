app.factory('zensPlot', function(){
    return new ZensPlot();
});

app.factory('zensUtil', function(){
    return new ZensUtil();
});

app.factory('zensGrafs', ['zensUtil', '$http','zensPlot', 'URL', function (zensUtil, http, plot, serverlUri) {    
    return new ZensReader(zensUtil, http, plot, serverlUri);
}]);

app.controller('ZensGraf',['$scope', 'zensGrafs', 'ENV',
    function (scope, zens, env) {
        // the dot rule
        scope.parameters = {
            sensorId: "graphDiv",
            sensorName: "-"
        }

        scope.sensors =  {
            switcher: function(sensorId){
                scope.parameters.sensorName = sensorId
                if (sensorId === 'e1'){
                    zens.s_e1(scope.parameters.sensorId);
                }else if (sensorId=== 't1'){
                    zens.s_t1(scope.parameters.sensorId);
                }
            }
        }        

    }
]);



