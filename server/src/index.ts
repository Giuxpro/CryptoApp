import express from 'express';
const ParseServer = require('parse-server').ParseServer;

const app = express();

const api = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/CryptoApp',
    cloud: './src/cloud/main.js',
    appId: 'myAppId',
    fileKey: 'myFileKey',
    masterKey: 'mySecretMasterKey',
  });

 api.start();

app.use('/parse', api.app);


const port = 1337;
app.listen(port, function() {
  console.log(`parse-server app running on port ${port}.`);
});