const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello! welcome');
});

app.listen(6999, () => {
  console.log('started app on 6999...');
});