const express = require('express');

const app = express();
const apiRouter = require('./routes/api');
const mongoose = require('mongoose');


app.use('/api', apiRouter);

mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log(`Connected to MongoDb`))
   .catch(() => console.log('Mongoose not connected'))

app.listen(process.env.port || 5000, () => {
   console.log('Listening on port 5000');
})