#!/bin/bash
#Script testing all the tests files in the ./test/ directory

FILES=./test/*
for f in $FILES
    do
      echo "Testing $f file..."
      node $f;
      echo "File $f tested..."
    done