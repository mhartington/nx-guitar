import express from 'express';
import {guitar} from '@guitars/guitar'
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
app.get('/api', (req, res) => {
  res.send({ message: guitar() });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
