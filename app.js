const express = require('express');

const app = express();

const app = require('./app');

app.listen(8082, (req,res) => {
  console.log(`Listening on port ${port}/n ${process.env.DB_URL}`);
});


