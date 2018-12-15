NPMVERSION=node -pe "require('./package.json').version"

git add .
git status
git commit -m "releaseing version ${NPMVERSION}"
git tag ${NPMVERSION}
git push
git checkout release
git merge ${NPMVERSION}
git push
