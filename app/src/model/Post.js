//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    body: String,
    numberOfLikes: Number
});

// Compile model from schema
//create collection (table) fron schema
module.exports = mongoose.model('Post', postSchema);