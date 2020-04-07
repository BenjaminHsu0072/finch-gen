#!/usr/bin/env node
let fs = require('fs');
let cIndexHtml = `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Finch</title>
</head>
<body>
Hello World !
</body>
</html>
    `;
let cPackage =`{
  "name": "app",
  "version": "0.1.0",
  "main": "index.js",
  "keywords": [],
  "dependencies": {
    "finch-min": "^0.1.3"
  },
  "devDependencies": {
    "@types/node": "^13.11.0"
  }
}`;
let cIndexTs = `import {Finch, responseJson, responseStaticFiles} from "finch-min";

let mike = new Finch();
mike.staticDir = "./static";
mike.use('/', (req, res, next) => {
    responseStaticFiles(res,"./static/index.html");
});

mike.use('/hello', (req, res, next) => {
    responseJson(res,"World");
});

mike.listen(5000);`;
let cTsconfig =`{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "sourceMap": false
  },
  "exclude": [
    "node_modules"
  ]
}`;
fs.mkdirSync('./log');
fs.mkdirSync('./static');
fs.mkdirSync('./static/css');
fs.mkdirSync('./static/js');
fs.mkdirSync('./static/img');
fs.writeFileSync('./static/index.html', cIndexHtml,`utf8`);
fs.writeFileSync('./index.ts', cIndexTs,`utf8`);
fs.writeFileSync('./package.json', cPackage,`utf8`);
fs.writeFileSync('./tsconfig.json', cTsconfig,`utf8`);