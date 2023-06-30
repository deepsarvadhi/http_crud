import http from 'http';
import url from 'url';
import routers from './router/Router.js'
import resdata from './middleware/errorHandling.js'
import dotenv from 'dotenv';

dotenv.config();
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const routeHandler = routers[parsedUrl.pathname];


    if (typeof routeHandler === 'function') {
        routeHandler(req, res);
    } else {
        res.writeHead(200, resdata.global());
        res.end(JSON.stringify(resdata.URLNOTFOUND()));
    }
});

const port = process.env.PORT || 3011;
server.listen(port, () => { });

export default { server };