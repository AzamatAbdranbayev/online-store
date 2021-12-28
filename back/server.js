require('dotenv').config({ path: '../.env' });
console.log(process.env.BACK_HOST);
const express = require('express');
const app = express();
const middlewares = require('./src/middlewares/app.middlewares');
const mainRouter = require('./src/routes/main.router');

middlewares.forEach((middleware) => app.use(middleware));

const port = 8000;
app.use(mainRouter);
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server started on port: ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
