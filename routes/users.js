const express = require('express');
const router = express.Router();

const Person = require('../schemas/personalData');

router.get('', function(req, res){
    res.send('GET');
});

router.post('/persons', function(req, res){
    Person.create(req.body).then(function(person){
    res.send(person)
    });

});

module.exports = router;
