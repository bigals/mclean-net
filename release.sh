NPMVERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)

git add .

git status
git commit -m "releasing version ${NPMVERSION}"
git tag ${NPMVERSION}

git push

git checkout release
git merge ${NPMVERSION}

git push

read -p "Press enter to continue"
