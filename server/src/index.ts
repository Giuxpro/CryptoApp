import "dotenv/config"
import express from 'express';
import { parseDashboard } from './config/parseDashboard'
import { parseServer } from './config/parseServer'
const app = express();
const { PORT } = process.env;

app.use('/dashboard', parseDashboard.show());
app.use('/parse', parseServer.run());

const port = PORT || 1335
app.listen(port, function() {
  console.log(`parse-server app running on port ${port}.`);
});