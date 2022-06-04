import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import next from 'next';
import http from 'http';
import https from 'https';
import { createTerminus } from '@godaddy/terminus';
import Koa from 'koa';
import logger from 'koa-morgan';

const local = process.env.APP_PROFILE === 'local';

const port = Number.parseInt(process.env.PORT ?? '', 10) || (local ? 443 : 3000);

const root = path.resolve(__dirname, '../');
const options = local
  ? {
    key: fs.readFileSync(`${root}/local.domain.com-key.pem`),
    cert: fs.readFileSync(`${root}/local.domain.com.pem`),
  }
  : undefined;

const app = next({ dev: local });
const handle = app.getRequestHandler();

const productionLogFormat = '[A] :remote-addr :remote-user [:date[iso]] :method :url HTTP/:http-version :status :res[content-length] - :response-time :referrer :user-agent -';
const logFormat = local ? 'dev' : productionLogFormat;

app.prepare().then(() => {
  const host = process.env.HOST;
  const koa = new Koa();

  koa.use(logger(logFormat));

  koa.use((ctx) => {
    return handle(ctx.req, ctx.res);
  });

  const server = options
    ? https.createServer(options, koa.callback())
    : http.createServer(koa.callback());

  if (!local) {
    // for graceful shutdown
    const sleepBeforeShutdown = 5;
    createTerminus(server, {
      signals: ['SIGINT', 'SIGTERM'],
      beforeShutdown: async () => {
        // given your readiness probes run every 5 second
        // may be worth using a bigger number so you won't
        // run into any race conditions
        return new Promise((resolve) => {
          console.log(`> Shutting down server after ${sleepBeforeShutdown} sec...`);
          setTimeout(resolve, sleepBeforeShutdown * 1000);
        });
      },
      onShutdown: async () => {
        console.log('> Server gracefully exited');
      },
    });
  }

  server.listen(port, () => {
    console.log(`✨ Server started on ${host}:${port} 🚀 `);
  });
});
