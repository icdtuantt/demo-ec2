import express from 'express';
import { get } from '../index2';

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Hello world</h1>');
});
app.get('/get',get)
app.listen(5000, () => console.log(`App running port 5000`));
