map.on('load', function () {

    map.addLayer(
{'id': 'ZONE_001',
	'type': 'fill',
	'source': {
	    'type': 'geojson',
	    'data': {
		'type': 'Feature',
		'geometry': {
		    'type': 'Polygon',
		    'coordinates': [[[-5.388600, 47.855495],[-4.942959, 47.907468],[-4.506652, 47.607019],[-4.627317, 47.041544],[-5.668856, 47.126156]]]
		}
	    }
	},
	'layout': {},
	'paint': { 'fill-color': '#088', 'fill-opacity': 0.8}});
});
