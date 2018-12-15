NPMVERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)

git checkout release
git merge ${NPMVERSION}

exit 0
