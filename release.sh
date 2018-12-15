NPMVERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)
echo "Deploying ${NPMVERSION}...."

git add .
git status
git commit -m "releasing version ${NPMVERSION}"
git tag ${NPMVERSION}
git push
git checkout release
git merge ${NPMVERSION}
git push
git checkout master

echo "Check-In Finished, AWS Build Pipeline Triggered"
