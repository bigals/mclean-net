NPMVERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)
GIT=`which git`

${GIT} add package.json
${GIT} add package-lock.json

${GIT} status
${GIT} commit -m "releasing version ${NPMVERSION}"
${GIT} tag ${NPMVERSION}

exit 0
