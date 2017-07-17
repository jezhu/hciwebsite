(function($) {
    "use strict"; // Start of use strict

    var mymap = L.map('mapid').setView([55.9449353,-3.1839465], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'jezhu.24pi3n5b',
        accessToken: 'pk.eyJ1IjoiamV6aHUiLCJhIjoiY2l2bWdiMDl4MDBkdDJ5cWRid3Q1aWxudCJ9.o-WdNcCfXKHPcKnsGorRQQ'
    }).addTo(mymap);

    $("#mapid").on('load', function() {$(window).resize()});

    var marker = L.marker([55.9447178,-3.1896043]).addTo(mymap);
    var marker = L.marker([55.9443231,-3.1889671]).addTo(mymap);
    var marker = L.marker([55.9436138,-3.1909757]).addTo(mymap);
    var marker = L.marker([55.9458662,-3.1941705]).addTo(mymap);
    
})(jQuery); // End of use strict
