#!/bin/bash

IFS=$'\n' ARRAY=($(cat $1))

echo -n "var geojson = {
    type: 'FeatureCollection',
    features: [" > /tmp/marker.js

n=0
for line in ${ARRAY[@]}
do
    echo $line
    IFS=',' read -r -a value <<< "$line"
    if [ $n -gt 0 ]
    then
	if [ $n -gt 1 ]
	then
	    echo -n "," >> /tmp/marker.js
	fi
	echo -n "{
	type: 'Feature',
	geometry: {
	    type: 'Point',
	    coordinates: [${value[3]}, ${value[4]}]
	},
	properties: {
	    course: ${value[7]},
	    mmsi: '${value[0]}',
	    imo: '${value[1]}',
	    name: '${value[12]}',
	    timestamp: '${value[9]}',
	    status: '${value[8]}',
	    flag: '${value[15]}',
	    lenght: '${value[16]}',
	    width: '${value[17]}',
	    type: '${value[23]}'
	    dest: '${value[25]}',
	    dtg: '${value[42]}',
	    dtt: '${value[43]}',
	    eta: '${value[26]}',
	    year: '${value[21]}',
	}
    }" >> /tmp/marker.js
    fi
    n=$(($n + 1))
done

echo -n "]
};
" >> /tmp/marker.js

cp /tmp/marker.js .
