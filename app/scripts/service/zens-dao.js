/**
 * Connect to backend to fetch data
 * @param $http
 * @param backendUrl
 * @param localStorage
 * @returns {{getData: Function}}
 * @constructor
 */

function ZensDao($http, backendUrl, localStorage) {

    /**
     * Popluate sensor
     * @param domId the dom to plot to, remember that the dom needs to be finished before plotting.
     * @param sensorNAme the id of the stored sensor
     */
    var getData = function(domId, sensorName) {
        if (localStorage.get(sensorName) == undefined)
        {
            $http.get(backendUrl + sensorName).success(
                function(data){
                    localStorage.add(sensorName, JSON.stringify(data));
                    return data;
                });
        }else{
            return localStorage.get(sensorName);
        }
    };

    return {
        getData: getData        
    }
}