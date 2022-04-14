import {middleWareFunction, parsedRequest, ServerResponse} from 'tsfinch';

let handle_welcome: middleWareFunction;

handle_welcome =
    (req, res, next) => {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('Welcome !');
        res.end();
    }

export {handle_welcome}