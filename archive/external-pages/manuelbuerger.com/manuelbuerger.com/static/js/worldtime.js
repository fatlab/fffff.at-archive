/* world time clocks
 *
 */

timezoneJS.timezone.loadingScheme = 'manualLoad';
timezoneJS.timezone.loadZoneJSONData('/static/js/tz.json', true);

$(function(){
    var cities = [
        {name: 'Berlin',        tz: 'Europe/Berlin'},
        {name: 'Paris',         tz: 'Europe/Paris'},
        {name: 'Tehran',        tz: 'Asia/Tehran'},
        {name: 'Hong Kong',     tz: 'Asia/Hong_Kong'},
        {name: 'New York',      tz: 'America/New_York'},
        {name: 'Dakar',         tz: 'Africa/Abidjan'}
    ];
    var $clocks = $('#worldtime > .cities');
    function update_clocks() {
        $clocks.empty();
        cities.forEach(function(city){
            var now = new Date();
            var cityTime = new timezoneJS.Date(now.getTime(), city.tz);
            var cityTimeElements = [cityTime.getHours(), cityTime.getMinutes(), cityTime.getSeconds()];
            var cityTimePadded = cityTimeElements.map(function(n){
                if(n<10) return '0'+n
                else return n;
            });
            var timeString = cityTimePadded.join(':');
            $('<span class="city">' + city.name + ': <span class="time">' + timeString + '</span></span>')
                .appendTo($clocks);
        });
    }
    update_clocks();
    setInterval(update_clocks, 500);
});