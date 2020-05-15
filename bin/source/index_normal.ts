import {Finch, responseJson, responseStaticFiles} from "tsfinch";
import {cookieParser} from "./middleware/cookieParser";
import {postParser} from "./middleware/postParser";

let mike = new Finch();
mike.staticDir = "./static";
mike.use('/', (req, res, next) => {
    responseStaticFiles(res,"./static/index.html");
});
mike.use('/hello', (req, res, next) => {
    responseJson(res,"World");
});

mike.use('/testCookie',cookieParser);
mike.use('/testCookie', (req, res, next) => {
    responseJson(res,req.cookie);
});
mike.use('/upload', postParser);
mike.use('/upload', (req, res) => {
    console.log(JSON.stringify(req.postFields));
    console.log(JSON.stringify(req.postFiles));
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end();
});


mike.listen(5000);