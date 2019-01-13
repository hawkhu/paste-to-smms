#!/bin/bash

xclip -selection clipboard -target image/png -o > $1
curl $2 $3 https://sm.ms/api/upload/ -X POST -F "smfile=@$1"