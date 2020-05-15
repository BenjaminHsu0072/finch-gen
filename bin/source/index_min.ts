import {Finch, responseJson, responseStaticFiles} from "tsfinch";

let mike = new Finch();
mike.staticDir = "./static";
mike.use('/', (req, res, next) => {
    responseStaticFiles(res,"./static/index.html");
});
mike.use('/hello', (req, res, next) => {
    responseJson(res,"World");
});

mike.listen(5000);