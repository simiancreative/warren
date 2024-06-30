#!/bin/bash


SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
SOURCE_PATH=${SCRIPT_DIR}/../package.json

# get the release version from the command line
CURRENT_VERSION=$1

# update the source version
jq ".version = \"$NEW_VERSION\"" ${SOURCE_PATH} >tmp.$$.json \
  && mv tmp.$$.json ${SOURCE_PATH}
