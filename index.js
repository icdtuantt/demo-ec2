import express from 'express';

const app = express();
const PORT = 80;
app.get('/', (req, res, next) => {
  res.send('<h1>Hello world</h1>');
});
app.listen(PORT, () => console.log(`App running port ${PORT}`));
