#!/bin/bash

xclip -selection clipboard -target image/png -o > $1
curl https://sm.ms/api/upload/ -X POST -F "smfile=@$1"
