#!/usr/bin/env bash
npm install ng2-inline-template typescript -g
sed -i '' -e 's/\"private\": true/\"main\": \"dist\/index.js\"/' package.json
echo "TODO: update package.json wisely"
