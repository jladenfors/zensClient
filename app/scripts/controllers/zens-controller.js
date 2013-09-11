app.factory('zensFlot', function(){
    return new ZensFlot();
});

app.factory('zensUtil', function(){
    return new ZensFlotUtil();
});

app.factory('zensFormatter', ['zensUtil',
    function(util){
        return new ZensDataFormatter(util);
    }]);

app.factory('zensDao', ['$http', 'URL', 'localStorageService',
    function(http, serverlUri, localStorage) {
        return new ZensDao( http, serverlUri, localStorage);
    }]);

app.factory('zensGrafs', ['zensUtil','zensFlot', 'zensDao', 'zensFormatter',
    function (zensUtil, flot, zensDao, zensFormatter) {
        return new ZensReader(zensUtil, flot, zensDao, zensFormatter);
    }
]);

app.controller('ZensGraf',['$scope', 'zensGrafs', 'ENV',
    function (scope, zens, env) {
        // the dot rule
        scope.parameters = {
            domIdPrefix: "graphDiv",
            sensorName: "-"
        }

        scope.sensors =  {
            plot: function(sensorId){
                // Set sensor name! 
                scope.parameters.sensorName = sensorId
                if (sensorId === 'e1'){
                    zens.plotElectric(scope.parameters.domIdPrefix);
                }else if (sensorId=== 't1'){
                    zens.plotTemperature(scope.parameters.domIdPrefix);
                }
            }
        }

    }
]);



