import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import UAParser from 'ua-parser-js';
import * as sapper from '@sapper/server';

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
    .use(
        compression({threshold: 0}),
        sirv('static', {dev}),
        sapper.middleware({
            session: (req) => ({
                ua: (new UAParser(req.headers['user-agent'])).getResult(),
            }),
        }),
    )
    .listen(PORT, (err) => {
        if (err) console.log('error', err);
    });
