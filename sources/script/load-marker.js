// add markers to map
geojson.features.forEach(function(marker) {

    var rotate = "rotate(" + marker.properties.course + "deg)";
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker-link';

    var ship = document.createElement('div');
    ship.className = 'ship';
    ship.style.transform = ship.style.transform + rotate;

    var svg = document.createElement('svg');
    svg.viewBox = "0 0 24 34";

    var g = document.createElement('g');

    var path = document.createElement('path');
    path.setAttribute('d') = 'M13.88,3.45c-1-3.13-2.73-3.13-3.76,0L2,28.05c-1,3.13.82,5.7,4.12,5.7H17.88c3.3,0,5.15-2.56,4.12-5.7Z';

    g.appendChild(path);
    svg.appendChild(g);
    ship.appendChild(svg);

    el.appendChild(ship);

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
	.setLngLat(marker.geometry.coordinates)
	.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
	.setHTML('<h3 style="text-align: center;">' + marker.properties.name + '</h3><ul><li>MMSI: ' + marker.properties.mmsi + '</li><li>IMO: ' + marker.properties.imo + '</li><li>Statut: ' + marker.properties.status + '</li><li>Time: ' + marker.properties.timestamp + '</li><li>Pavillion: ' + marker.properties.flag + '</li><li>Longueur: ' + marker.properties.lenght + '</li><li>Largeur: ' + marker.properties.width + '</li><li>Année de construction: ' + marker.properties.year + '</li><li>Type: ' + marker.properties.type + '</li><li>Destination: ' + marker.properties.dest + '</li><li>Distance restante: ' + marker.properties.dtg + '</li><li>Distance effectué' + marker.properties.dtt + '</li><li>ETA: ' + marker.properties.eta + '</li></ul>'))
	.addTo(map);
});
