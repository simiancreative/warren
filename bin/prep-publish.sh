SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
SOURCE_PATH=${SCRIPT_DIR}/../version.txt

# get the current version from package.json
NEW_VERSION=$(cat ${SOURCE_PATH})

# update the version in package.json
jq ".version = \"$NEW_VERSION\"" package.json >tmp.$$.json \
  && mv tmp.$$.json package.json

echo '//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}' > .npmrc
echo 'registry=https://registry.npmjs.org/' >> .npmrc
echo 'always-auth=true' >> .npmrc
