# Deploying
- Make your commits as you are developing
- Dont call npm version directly, this will be handled in the npm command
- With a up to date master branch run npm run prepRelease:patch|minor|major
- Run git push
- Run npm run release:patch|minor|major
- Run git push
- An AWS pipeline will kick off building the project on AWS, and deploying the distributable to the S3 Bucket
- Run git checkout master
