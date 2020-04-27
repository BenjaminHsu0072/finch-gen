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
    "tsfinch": "^0.1.7",
    "finch-db" : "^0.1.2"
  },
  "devDependencies": {
    "@types/node": "^13.11.0"
  }
}`;
let cIndexTs = `import {Finch, postParser, responseJson, responseStaticFiles} from "tsfinch";
import {db} from "finch-db"

let mike = new Finch();
mike.staticDir = "./static";
mike.use('/', (req, res, next) => {
    responseStaticFiles(res,"./static/index.html");
});

mike.use('/hello', (req, res, next) => {
    responseJson(res,"World");
});

mike.use('/upload', postParser);
mike.use('/upload', (req, res) => {
    console.log(JSON.stringify(req.postFields));
    console.log(JSON.stringify(req.postFiles));
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\\n\\n');
    res.end();
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