const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Though we define Schema but it is not strict and still we have flexibility to to save data that doesn't match Schema
const adminSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

},{strict: false});    // indicates that the schema is flexible and may grow based on requirements.

//Defining and exporting model connected to this Schema using "model('model-name','Schema')" pair.
module.exports = mongoose.model('Admin',adminSchema);