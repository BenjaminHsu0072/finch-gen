import {middleWareFunction, parsedRequest, ServerResponse} from 'tsfinch';
import {responseWare} from 'tsfinch';


let handle_post: middleWareFunction;

handle_post =
    (req, res, next) => {
        let post = {
            fields:req.postFields,
            files:req.postFiles
        }
        responseWare.rJson(res,JSON.stringify(post))
    }

export {handle_post}