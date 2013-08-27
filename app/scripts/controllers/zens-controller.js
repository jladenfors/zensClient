app.factory('zensPlot', function(){
    return new ZensPlot();
});

app.factory('zensUtil', function(){
    return new ZensUtil();
});

app.factory('zensGrafs', ['zensUtil', '$http','zensPlot', function (zensUtil, http, plot, scope) {    
    return new ZensReader(zensUtil, http, plot, scope);
}]);

app.controller('ZensGraf',['$scope', 'zensGrafs', 'ENV',
    function (scope, zens, env) {
        console.log("It is the config" + env)
        // the dot rule
        scope.parameters = {
            sensorId: "graphDiv",
            sensorName: "-"
        }

        scope.sensors =  {
            switcher: function(sensor){
                console.log("in sensor" + sensor)
                if (sensor === 'e1'){
                    zens.s_e1(scope.parameters.sensorId);
                }else if (sensor=== 't1'){
                    zens.s_t1(scope.parameters.sensorId);
                }
            }
        }

        
        function onstartup(){            
            console.log(scope.parameters.sensorId)            
        }
        onstartup();

    }
]);



