NPMVERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)

git add .
git status
git commit -m "releasing version ${NPMVERSION}"
git tag ${NPMVERSION}
