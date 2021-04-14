import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Hello world</h1>');
});
app.listen(5000, () => console.log(`App running port 5000`));
