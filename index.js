const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/users');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/database', error => {
    if (error !==null) {
        console.log(`Database is not connected! Program needs to be restarted after connecting with database.`)
    }

    else {
         console.log('App is listening')
    }
})

mongoose.Promise = global.Promise
app.use(routes);
app.listen(5000); 

