mapboxgl.accessToken = 'pk.eyJ1IjoibmluamFiYW4iLCJhIjoiY2pydXBmYzRvMmMzejQ5cHN1OWY3Nm8xbyJ9.aqwwpbr5sEg6AKMqPi0CwQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ninjaban/cjrupfpd30pfh1fp3787sdxvs',
    center: [-0.633990, 50.016375],
    zoom: 6.5
});

// disable map rotation using right click + drag
map.dragRotate.disable();

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();
