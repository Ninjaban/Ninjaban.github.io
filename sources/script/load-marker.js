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
	.setHTML('<h3>' + marker.properties.name + '</h3><ul><li>MMSI: ' + marker.properties.mmsi + '</li><li>IMO: ' + marker.properties.imo + '</li><li>Statut: ' + marker.properties.status + '</li><li>Time: ' + marker.properties.timestamp + '</li><li>Pavillion: ' + marker.properties.flag + '</li><li>Longueur: ' + marker.properties.lenght + '</li><li>Largeur: ' + marker.properties.width + '</li><li>Année de construction: ' + marker.properties.year + '</li><li>Type: ' + marker.properties.type + '</li><li>Destination: ' + marker.properties.dest + '</li><li>Distance restante: ' + marker.properties.dtg + '</li><li>Distance effectué' + marker.properties.dtt + '</li><li>ETA: ' + marker.properties.eta + '</li></ul>'))
	.addTo(map);
});
