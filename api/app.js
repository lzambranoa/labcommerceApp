const express = require('express');
const indexRouter = require('./routes/index');

const app = express()
const port = 3001


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  next();
});

app.use('/api', indexRouter);

module.exports = app;
