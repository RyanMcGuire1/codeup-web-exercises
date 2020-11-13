console.log(mapboxToken);
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11\n', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 9// starting zoom
});
// function geocode(search, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function(data) {
//             return data.features[0].center;
//         });
// }
var jimCord = [-98.709698,29.434356]
// geocode("302 W loop 1604, San Antonio, TX 78245", mapboxToken).then(function(result) {
//     console.log("Jims is " +result);
//     map.setCenter(result);
//     map.setZoom(10);
     var jimpop = (new mapboxgl.Popup()
        .setLngLat(jimCord)
        .setHTML("<h6>Jims</h6>"))
    var jimMark =new mapboxgl.Marker()
        .setLngLat(jimCord)
        .setPopup(jimpop)
        .addTo(map);


// geocode("10622 Culebra Rd., San Antonio, TX 78251", mapboxToken).then(function(result) {
//     console.log("IHOP cord is" + result  );
//     map.setCenter(result);
//     map.setZoom(10);
// });
    var ihopCord = [-98.700738,29.49199]
    var ihopPop = (new mapboxgl.Popup()
        .setLngLat(ihopCord)
        .setHTML("<h6>IHOP</h6>"))
    var ihopMark = new mapboxgl.Marker()
        .setLngLat(ihopCord)
        .setPopup(ihopPop)
        .addTo(map);




// geocode("8303 State Highway 151, San Antonio,TX 78245", mapboxToken).then(function(result) {
//     console.log(result);
//
// });
    var pandaExpressCord =[-98.650736, 29.436804]
     var pandaPop = new mapboxgl.Popup()
        .setLngLat(pandaExpressCord)
        .setHTML("<h6>Panda Express</h6>")

    var pandaMark = new mapboxgl.Marker()
        .setLngLat(pandaExpressCord)
        .setPopup(pandaPop)
        .addTo(map);
