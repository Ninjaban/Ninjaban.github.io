#!/bin/bash

IFS=$'\n' ARRAY=($(cat $1))

echo -n "map.on('load', function () {

    map.addLayer(
" > /tmp/poly-geojson.js

n=0
for line in ${ARRAY[@]}
do
    echo $line
    IFS=',' read -r -a value <<< "$line"
    if [ $n -gt 0 ]
    then
	if [ $n -gt 1 ]
	then
	    echo -n "," >> /tmp/poly-geojson.js
	fi
	echo -n "{'id': '${value[0]}',
	'type': 'fill',
	'source': {
	    'type': 'geojson',
	    'data': {
		'type': 'Feature',
		'geometry': {
		    'type': 'Polygon',
		    'coordinates': [[" >> /tmp/poly-geojson.js
	i=0
	for tmp in ${value[@]}
	do
	    IFS=':' read -r -a latlon <<< "$tmp"
	    tmp=($())
	    if [ $i -gt 1 ]
	    then
		echo -n "," >> /tmp/poly-geojson.js
	    fi
	    if [ $i -gt 0 ]
	    then
		echo -n "[${latlon[1]}, ${latlon[0]}]" >> /tmp/poly-geojson.js
	    fi
	    i=$(($i + 1))
	done
	echo -n "]]
		}
	    }
	},
	'layout': {},
	'paint': { 'fill-color': '#088', 'fill-opacity': 0.8}}" >> /tmp/poly-geojson.js
    fi
    n=$(($n + 1))
done

echo -n ");
});
" >> /tmp/poly-geojson.js

cp /tmp/poly-geojson.js .
