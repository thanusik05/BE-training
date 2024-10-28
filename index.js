const mongoose = require('mongoose')
const { find } = require('underscore');
express = require('express');
const app = express();
const customer = require('./routes/customer')
mongoose.connect('mongodb://localhost/vidly')
 .then(()=> console.log('mongodb Connection Successful'))
 .catch(err => console.error('Could not connect to mongodb..'));
app.use(express.json());

const genres = require('./routes/genre');
app.use('/api/genre',genres);
app.use('/api/customer',customer);
app.listen(5000,()=>console.log("listening in port 5000"));