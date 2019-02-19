var geojson = {
    type: 'FeatureCollection',
    features: [{
	type: 'Feature',
	geometry: {
	    type: 'Point',
	    coordinates: [-77.032, 38.913]
	},
	properties: {
	    rotation: 45,
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
		       rotation: 120,
		       title: 'Mapbox2',
		       description: 'San Francisco, California'
		   }
	       }]
};
