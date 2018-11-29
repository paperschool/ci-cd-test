#!/bin/sh

docker login -u $DOCKER_USER -p $DOCKER_PASS

if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
elif [ "$TRAVIS_BRANCH" != "master" ]; then
    TAG="$TRAVIS_BRANCH"
else
    TAG="latest"
fi

echo "Building Docker Image"
docker build -f Dockerfile -t $TRAVIS_REPO_SLUG .

echo "Tagging Docker Image"
docker tag $TRAVIS_REPO_SLUG $DOCKER_USER/$TRAVIS_REPO_SLUG

echo "Pushing Docker Image"
docker push $DOCKER_USER/$TRAVIS_REPO_SLUG