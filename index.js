const Joi = require("joi");
const { find } = require('underscore');
express = require('express');
const app = express();
app.use(express.json());

const genres = require('./routes/genre');
app.use('/api/genres',genres);
app.listen(5000,()=>console.log("listening in port 5000"));