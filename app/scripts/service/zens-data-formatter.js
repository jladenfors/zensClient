/**
 * Flot data formatter
 * @param util
 * @returns {{plotElectric: *, plotTemperature: *}}
 * @constructor
 */

function ZensDataFormatter(util) {

    var perHour = function (data, dataHandle){
        var hourHash = {};
        data.forEach(
            function (reply, i) {
                var json = reply;
                var eventDate = util.zDate(json);
                hourHash[eventDate.getTime()] = dataHandle(json.value);
            }
        );
        return hourHash;
    };

    var perDay = function (data, dataHandle){
        var dayHash = {};
        data.forEach(
            function (reply, i) {
                var json = reply;
                var eventDate = util.zDate(json);
                dayHash[eventDate.getTime()] = dataHandle(json.value);
            }
        );
        return dayHash;
    };


    var elHandle = function(data){
        return data/1000;
    };

    var tempHandle = function(data){
        return parseFloat(data).toFixed(1);
    };

    return {
        perHour: perHour,
        perDay: perDay,
        elHandle: elHandle,
        tempHandle: tempHandle
        
    }

}