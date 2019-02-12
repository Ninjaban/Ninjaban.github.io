// add markers to map
geojson.features.forEach(function(marker) {

    var rotate = "rotate(" + marker.properties.course + "deg)";
    // create a HTML element for each feature
    var el = document.createElement('div');
    var al = document.createElement('div');
    el.className = 'marker-link';
    al.className = 'marker';
    al.style.transform = al.style.transform + rotate;
    el.appendChild(al);

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
	.setLngLat(marker.geometry.coordinates)
	.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
	.setHTML('<h3>' + marker.properties.name + '</h3><ul><li>MMSI: ' + marker.properties.mmsi + '</li></ul>'))
	.addTo(map);
});
