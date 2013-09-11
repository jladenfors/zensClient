/**
 * Sensor reader
 *
 * electric endpoint : getEl
 * electric endpoint : getTemp
 *
 * format : {res: [{date: 123414, data: asdfds}, {date: 123414, data: asdfds}]}
 *
 * 2012, Jonas
 */
function ZensReader(util,  plotter, dao, formatter) {

    /**
     * Popluate sensor e1
     * @param domId the dom to plot to, remember that the dom needs to be finished before plotting.
     */
    var sensor_e1 = function(domId) {        
        var data = dao.getData(domId, "e1");
        var perHour = util.calculateDelta(formatter.perHour(data, formatter.elHandle));
        var perDay = util.calculateDelta(formatter.perDay(data, formatter.elHandle));
        
        plotter.plot(
            [perHour],
            $(util.idCreator(domId, "Day")),
            ["Kw/h"],
            [1, "hour"],
            "%H",
            util.zensTimeHash().today,
            util.zensTimeHash().tomorrow,
            0,
            10,
            "#F999000");

        plotter.plot(
            [perDay],
            $(util.idCreator(domId, "Month")),
            ["Kw/h"],
            [1, "day"],
            "%d",
            util.zensTimeHash().firstDayOfMonth,
            util.zensTimeHash().nextMonth,
            40,
            120,
            "#111000");
    };

    /**
     * Popluate sensor t1
     * @param domId the dom to plot to, remember that the dom needs to be finished before plotting.
     */
    var sensor_t1 = function(domId) {        
        var data = dao.getData(domId, "t1");
        var perHour = util.calculateDelta(formatter.perHour(data, formatter.tempHandle));
        var perDay = util.calculateDelta(formatter.perDay(data, formatter.tempHandle));
        
        plotter.plot(
            [perHour],
            $(util.idCreator(domId, "Day")),
            ["C"],
            [1, "hour"],
            "%H",
            util.zensTimeHash().today,
            util.zensTimeHash().tomorrow,
            10,
            30,
            '#fff000');
        
        plotter.plot(
            [perDay],
            $(util.idCreator(domId, "Month")),
            ["C"],
            [1, "day"],
            "%d",
            util.zensTimeHash().firstDayOfMonth,
            util.zensTimeHash().nextMonth,
            10,
            30,
            '#fff000');
    };

    return {
        plotElectric: sensor_e1,
        plotTemperature: sensor_t1
    }

}
