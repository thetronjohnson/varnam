git rm --cached static/editor

git submodule update --init --recursive


cd varnam-editor
npm install

export VUE_PUBLIC_PATH="/editor/"
npm run build

sed -i 's+http://127.0.0.1:8089+https://api.varnamproject.com+g' dist/js/*.js

rm -rf $(realpath ../static/)/editor
mv dist $(realpath ../static/)/editor
