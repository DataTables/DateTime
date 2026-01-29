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

$DT_SRC/node_modules/typescript/bin/tsc -p ./tsconfig.json

sed -i "s#import DataTable from 'datatables.net';##" dist/dataTables.dateTime.js

$DT_SRC/node_modules/rollup/dist/bin/rollup \
	--config rollup.config.mjs

js_wrap dist/dataTables.dateTime.js "datatables.net"

css_compress dist/dataTables.dateTime.css

if [ ! -d $OUT_DIR ]; then
	mkdir $OUT_DIR
	mkdir $OUT_DIR/js
	mkdir $OUT_DIR/css
fi

rsync -r dist/*.js $OUT_DIR/js
rsync -r dist/*.mjs $OUT_DIR/js
rsync -r dist/*.css $OUT_DIR/css

# Copy and build examples
rsync -r examples $OUT_DIR
examples_process $OUT_DIR/examples

# Readme and license
cp readme.md $OUT_DIR
cp license.txt $OUT_DIR
