const express = require('express');
const cors = require("cors");

require('./db/config');

const app = express();



app.use = (express.json());
app.use(cors());





app.listen(4000);