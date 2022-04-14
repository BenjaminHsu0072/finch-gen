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

fs.mkdirSync('./StaticFiles');
fs.mkdirSync('./StaticFiles/css');
fs.mkdirSync('./StaticFiles/js');
fs.mkdirSync('./StaticFiles/img');
fs.writeFileSync('./StaticFiles/index.html', getFile('index.html'),`utf8`);

fs.mkdirSync('./Handles');
fs.writeFileSync('./Handles/handle_post.ts', getFile('handle_post.ts'),`utf8`);
fs.writeFileSync('./Handles/handle_responseJson.ts', getFile('handle_responseJson.ts'),`utf8`);
fs.writeFileSync('./Handles/handle_welcome.ts', getFile('handle_welcome.ts'),`utf8`);


fs.writeFileSync('./index.ts', getFile('index.ts'),`utf8`);
fs.writeFileSync('./package.json', getFile('package.json'),`utf8`);
fs.writeFileSync('./tsconfig.json', getFile('tsconfig.json'),`utf8`);

