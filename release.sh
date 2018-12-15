NPMVERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)

git add .

git status
git commit -m "releasing version ${NPMVERSION}"
git tag ${NPMVERSION}

git push
git push origin ${NPMVERSION}

git checkout release
git merge ${NPMVERSION}

git push origin ${NPMVERSION}

read -p "Press enter to continue"
