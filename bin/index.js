#!/usr/bin/env node

let fs = require('fs');
let theArgs = process.argv;
let type = "normal";
switch (theArgs[2]) {
    case "min":
        type = "min";
        break;
    case "full":
        type = "full";
        break;
    case "normal":
        type = "normal";
        break;
    default:
        break;
}

function getFile(fileName)
{
    return fs.readFileSync(__dirname+"/source/"+fileName,'utf8');
}



fs.mkdirSync('./log');
fs.mkdirSync('./static');
fs.mkdirSync('./static/css');
fs.mkdirSync('./static/js');
fs.mkdirSync('./static/img');

fs.writeFileSync('./static/index.html', getFile('index.html'),`utf8`);
fs.writeFileSync('./tsconfig.json', getFile('tsconfig.json'),`utf8`);


if(type!=="min")
{
    fs.mkdirSync('./middleware');
    fs.writeFileSync('./middleware/cookieParser.ts', getFile('midware_cookieParser.ts'),`utf8`);
    fs.writeFileSync('./middleware/postParser.ts', getFile('midware_postParser.ts'),`utf8`);
}

switch (type) {
    case "min":
        type = "min";
        fs.writeFileSync('./package.json', getFile('package_min.json'),`utf8`);
        fs.writeFileSync('./index.ts', getFile('index_min.ts'),`utf8`);
        break;

    case "full":
        type = "full";
        fs.writeFileSync('./package.json', getFile('package_full.json'),`utf8`);
        fs.writeFileSync('./index.ts', getFile('index_full.ts'),`utf8`);
        break;

    case "normal":
        type = "normal";
        fs.writeFileSync('./package.json', getFile('package_normal.json'),`utf8`);
        fs.writeFileSync('./index.ts', getFile('index_normal.ts'),`utf8`);
        break;

    default:
        break;
}