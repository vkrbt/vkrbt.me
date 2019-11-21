import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import UAParser from 'ua-parser-js';
import proxy from 'http-proxy-middleware';
import crypto from 'crypto';
import helmet from 'helmet';
import * as sapper from '@sapper/server';

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

const TRAILING_SLASHES_REGEX = /\/+$/;

polka() // You can also use Express
    .use((req, res, next) => {
        if (TRAILING_SLASHES_REGEX.test(req.path)) {
            res.writeHead(301, {
                Location: req.path.replace(TRAILING_SLASHES_REGEX, ''),
                'Content-Type': 'text/plain',
            });
            res.end();
        }

        next();
    })
    .use(
        '/api',
        proxy({
            target: 'http://127.0.0.1:8000',
            changeOrigin: true,
            pathRewrite: {
                '^/api/': '/',
                '^/api': '/',
            },
        }),
    )
    .use((req, res, next) => {
        res.locals = {
            nonce: crypto.randomBytes(16).toString('hex'),
        };

        next();
    })
    .use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
                fontSrc: ["'self'", 'https://fonts.gstatic.com'],
                connectSrc: [
                    "'self'",
                    'https://fonts.googleapis.com',
                    'https://fonts.gstatic.com',
                    ...(dev ? [
                        'http://localhost:10000',
                        'https://vkrbt.me',
                    ] : []),
                ],
                scriptSrc: [
                    "'self'",
                    ...(dev ? ["'unsafe-eval'"] : []),
                    (req, res) => `'nonce-${res.locals.nonce}'`,
                ],
            },
        },
    }))
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
