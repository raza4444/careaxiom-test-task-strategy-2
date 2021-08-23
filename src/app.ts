import 'reflect-metadata'
import config from './config'
import express from 'express'
import routes from './routes';


async function startServer() {
  const app = express();

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  app.use('/', routes());
  
  // server listening to port
  const server = app.listen(config.port, () => {
    console.log(`Server listening on port: ${config.port}`)
  })
}

startServer();
