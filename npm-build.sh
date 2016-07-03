#!/usr/bin/env bash
set -e

# npm install ng2-inline-template typescript -g

rm -rf npm-dist
ng2inline "src/app/shared/**/*.ts" --outDir npm-dist

cp src/tsconfig.json src/typings.d.ts npm-dist
cd npm-dist
sed -i '' -e 's/main/index/g' tsconfig.json
tsc --declaration --outDir .
rm tsconfig.json typings.d.ts
