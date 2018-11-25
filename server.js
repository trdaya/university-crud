const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

mongoose.connect('mongodb://localhost/university');
mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 6999;
const studentRouter = require('./routes/studentRoutes')(router);

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('home route');
});
app.use('/api/students', studentRouter);
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`started app on ${PORT}...`);
});