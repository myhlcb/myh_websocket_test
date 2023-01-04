const WS = require('ws');
const wss = new WS.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('client server');
  ws.on('message', (msg) => {
    console.log(`get client msg:${msg}`);
    ws.send('疑是地上双')
  });
  ws.on('close', () => {
    console.log('client close');
  });
});
