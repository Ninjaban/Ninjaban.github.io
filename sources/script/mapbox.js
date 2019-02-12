mapboxgl.accessToken = 'pk.eyJ1IjoibmluamFiYW4iLCJhIjoiY2pydXBmYzRvMmMzejQ5cHN1OWY3Nm8xbyJ9.aqwwpbr5sEg6AKMqPi0CwQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ninjaban/cjrupfpd30pfh1fp3787sdxvs',
    center: [-0.633990, 50.016375],
    zoom: 6.5
});

var geojson = {
    type: 'FeatureCollection',
    features: [{
	type: 'Feature',
	geometry: {
	    type: 'Point',
	    coordinates: [-77.032, 38.913]
	},
	properties: {
	    title: 'Mapbox1',
	    description: 'Washington, D.C.'
	}
    },
	       {
		   type: 'Feature',
		   geometry: {
		       type: 'Point',
		       coordinates: [-122.414, 37.776]
		   },
		   properties: {
		       title: 'Mapbox2',
		       description: 'San Francisco, California'
		   }
	       }]
};

// add markers to map
geojson.features.forEach(function(marker) {

    var rotate = "rotate(120deg)"
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
		  .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
	.addTo(map);
});

// disable map rotation using right click + drag
map.dragRotate.disable();

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();
