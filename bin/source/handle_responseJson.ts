import {middleWareFunction, parsedRequest, ServerResponse} from 'tsfinch';
import {responseWare} from 'tsfinch';


let handle_responseJson: middleWareFunction;

handle_responseJson =
    (req, res, next) => {
    responseWare.rJson(res,{"message":"JsonInfo"})
    }

export {handle_responseJson}