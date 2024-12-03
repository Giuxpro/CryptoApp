import "dotenv/config"
import express from 'express';
import cors from 'cors';
import { parseDashboard } from './config/parseDashboard'
import { parseServer } from './config/parseServer'
const app = express();
const { PORT } = process.env;

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'X-Parse-Application-Id', 'X-Parse-REST-API-Key', 'Authorization'],
};


app.use(cors(corsOptions));
app.use('/dashboard', parseDashboard.show());
app.use('/parse', parseServer.run());

const port = PORT || 1335
app.listen(port, function() {
  console.log(`parse-server app running on port ${port}.`);
});