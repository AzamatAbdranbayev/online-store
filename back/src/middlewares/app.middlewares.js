const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const corsOptions = {
  origin: [
    `http://${process.env.LOCAL_HOST}:${process.env.LOCAL_PORT}`,
    `http://${process.env.LOCAL_HOST}`,
  ],
  optionSuccessStatus: 200,
  credentials: true,
  withCredentials: true,
};

console.log(
  'cors',
  `http://${process.env.LOCAL_HOST}:${process.env.LOCAL_PORT}`
);
module.exports = [
  cookieparser(),
  express.json(),
  fileUpload({ createParentPath: true }),
  cors(corsOptions),
  express.static('public'),
];
