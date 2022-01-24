#!/bin/bash

DT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/../.."
if [ "$1" = "debug" ]; then
	DEBUG="debug"
else
	OUT_DIR=$1
	DEBUG=$2
fi

# If not run from DataTables build script, redirect to there
if [ -z "$DT_BUILD" ]; then
	cd $DT_DIR/build
	./make.sh extension DateTime $DEBUG
	cd -
	exit
fi

# Change into script's own dir
cd $(dirname $0)

DT_SRC=$(dirname $(dirname $(pwd)))
DT_BUILT="${DT_SRC}/built/DataTables"
. $DT_SRC/build/include.sh

if [ ! -d node_modules -o ! -d node_modules/node-sass ]; then
	npm install
fi

./node_modules/gulp/bin/gulp.js

js_compress dist/dataTables.dateTime.js
css_compress dist/dataTables.dateTime.css

if [ ! -d $OUT_DIR ]; then
	mkdir $OUT_DIR
	mkdir $OUT_DIR/js
	mkdir $OUT_DIR/css
fi

rsync -r dist/*.js $OUT_DIR/js
rsync -r dist/*.css $OUT_DIR/css

# Copy and build examples
rsync -r examples $OUT_DIR
examples_process $OUT_DIR/examples

# Readme and license
cp readme.md $OUT_DIR
cp license.txt $OUT_DIR
