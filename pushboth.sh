#!/bin/bash
set -e

pushd nginx
docker build --rm -t docker.io/iphands/insights-npm-cache-nginx:latest .
docker push docker.io/iphands/insights-npm-cache-nginx:latest
popd

pushd npm_lazy
docker build --rm -t docker.io/iphands/insights-npm-cache:latest .
docker push docker.io/iphands/insights-npm-cache:latest
popd
