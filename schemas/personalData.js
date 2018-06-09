const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalData = new Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    date: {
        type: String,
    },
    });

const Person = mongoose.model('person', personalData);

module.exports = Person;