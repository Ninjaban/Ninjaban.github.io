#!/bin/bash

LINE=($(cat index.html | grep -o -E "<script .*></script>" | sed -r 's/.*"(.*)".*/\1/g' | grep -v -E '^http://' | sed -r 's@../(.*)@\1@g'))
SITE="http://themepixels.me/bracketplus/1.4/app/"
DIR="sources/"

mkdir $DIR

for value in ${LINE[@]}
do
    echo $SITE$value
    NAME=$(echo $value | sed -r 's@.*/([^/]+)$@\1@g')
    curl -X GET "$SITE$value" > "$DIR$NAME"
    sed -i -r "s@(<script .*\")\.\./$value\"@\1$DIR$NAME\"@g" index.html
done


LINE=($(cat index.html | grep -o -E "<link .*>" | sed -r 's/.*href="([^"]+)".*/\1/g' | grep -v -E '^http://' | sed -r 's@../(.*)@\1@g'))
SITE="http://themepixels.me/bracketplus/1.4/app/"
DIR="sources/"

mkdir $DIR

for value in ${LINE[@]}
do
    echo $SITE$value
    NAME=$(echo $value | sed -r 's@.*/([^/]+)$@\1@g')
    curl -X GET "$SITE$value" > "$DIR$NAME"
    sed -i -r "s@(<link .*href=\")\.\./$value\"@\1$DIR$NAME\"@g" index.html
done
