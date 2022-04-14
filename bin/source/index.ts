import {Finch} from 'tsfinch';
import {middleWareFunction,parsedRequest,ServerResponse } from 'tsfinch';
import {cookieParser} from 'tsfinch';
import {postParser,postFileInfo} from 'tsfinch';
import {responseWare} from 'tsfinch';

import {handle_welcome} from "./Handles/handle_welcome";
import {handle_responseJson} from "./Handles/handle_responseJson";
import {handle_post} from "./Handles/handle_post";

let app = new Finch();

app.staticDir = "./StaticFiles";

app.use('/', (req, res, next) => { //中间件函数
    res.writeHead(200, {'content-type': 'text/plain'});// 'res' 对象就是原生的 'ServerResponse' 对象
    res.write('HELLO WORLD!');
    res.end();
});

//使用外部的中间件处理
app.use('/welcome',handle_welcome);
app.use('/responseJson', handle_responseJson);

//多个中间件套用
app.use('/post', postParser);
app.use('/post', handle_post);


app.listen(3000);