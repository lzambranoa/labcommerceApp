const express = require('express');
const indexRouter = require('./routes/index');

const app = express()
const port = 3001


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/api', indexRouter);

module.exports = app;
