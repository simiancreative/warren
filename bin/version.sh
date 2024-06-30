#!/bin/bash


SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
SOURCE_PATH=${SCRIPT_DIR}/../package.json

# get the current version from package.json
NEW_VERSION=$(cat ${SOURCE_PATH} | jq -r '.version')

# update the version in package.json
jq ".version = \"$NEW_VERSION\"" package.json >tmp.$$.json \
  && mv tmp.$$.json package.json


