const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mongodb = process.env.MONGODB;

const postRoutes = require('./routes/api_route');

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use('/', postRoutes);


app.get('/', (req, res, next) => {
    res.send('running node-api');
});

mongoose
    .connect(mongodb, {
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(3010, console.log('Server started at port 3010'));
    })
    .catch(err => console.log(err));