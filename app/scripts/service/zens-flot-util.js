'use strict';

function ZensFlotUtil()
{
    /**
     * Calculate price of day intraday.
     * @param price
     * @param elDelta
     * @return {Number}
     */
    var priceCalculus = function(price, elDelta){
        var cost = 0;
        angular.forEach(elDelta, function(kw){
            if (!isNaN(elDelta[kw][1])) {
                cost += price * elDelta[kw][1];
            }
        });
        return cost;
    };


    var calculateDayDelta = function(map){

        var sortedKeys = zensSort(map);
        var sortedValues = [];
        var j = -1;
        var keyValOld = sortedKeys[0];
        var oldZd = new Date();

        angular.forEach(sortedKeys, function(keyVal){
            var zd = new Date(0);
            zd.setTime(parseFloat(keyVal));

            if (zd.getDate() !== oldZd.getDate()){
                sortedValues[j++] = [parseFloat(keyVal), parseFloat(map[keyVal] - map[keyValOld])];
                keyValOld = keyVal;
            }
            oldZd = zd;
        });
        return sortedValues;
    };

    var calculateDelta = function(map){
        var sortedKeys = zensSort(map);
        var sortedValues = [];
        var j = 0;
        var keyValOld = sortedKeys[0];
        var oldZd = new Date(0);

        angular.forEach(sortedKeys, function(keyVal){
            var zd = new Date(0);
            zd.setTime(parseFloat(keyVal));            
            if (zd.getHours() !== oldZd.getHours()){
                sortedValues[j++] = [parseFloat(keyVal), parseFloat(map[keyVal] - map[keyValOld])];
                keyValOld = keyVal;
            }
            oldZd = zd;
        });
        return sortedValues;
    };

    var orderHashSets = function(hashMap)
    {
        var sortedKeys = zensSort(hashMap);
        var sortedValues = [];
        var i = 0;
        angular.forEach(sortedKeys, function(keyVal){
            sortedValues[i++] = [parseFloat(keyVal), parseFloat(hashMap[keyVal])];
        });
        return sortedValues;
    };

    var zensSort = function(hashMap) {
        return Object.keys(hashMap).sort(
            function(a,b){
                return  a - b;
            }
        );
    };

    var zDate = function(jsonObj) {
        var d = new Date(0);
        d.setUTCSeconds(jsonObj.date );
        d.setHours(d.getHours() + 1); // Fix timezone issue
        return d;
    };

    var zensTimeHash = function(){
        var timeHash = {};
        var today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
        var nextMonth = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
        nextMonth.setDate(0);
        var firstDayOfMonth = new Date();
        firstDayOfMonth.setDate(0);
        firstDayOfMonth.setHours(0);
        firstDayOfMonth.setMinutes(1);
        timeHash.today = today.getTime();
        timeHash.tomorrow= tomorrow.getTime();
        timeHash.nextMonth = nextMonth.getTime();
        timeHash.firstDayOfMonth = firstDayOfMonth.getTime();
        return timeHash;
    };


    var idCreator = function(domId, suffix){
        return '#'+domId+suffix;
    };


    return {
        priceCalculus: priceCalculus,
        calculateDayDelta: calculateDayDelta,
        calculateDelta: calculateDelta,
        orderHashSets: orderHashSets,
        zDate: zDate,
        idCreator: idCreator,
        zensTimeHash: zensTimeHash
    };
}