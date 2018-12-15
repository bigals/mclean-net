# Deploying
- Make your commits as you are developing
- Dont call npm version directly, this will be handled in the npm command
- With a up to date master branch run npm run ci:patch|minor|major
- An AWS pipeline will kick off building the project on AWS, and deploying the distributable to the S3 Bucket
