const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: {type:String, unique:true},
    password: String,
} , {timestaps:true});

const userModel = mongoose.model('User', UserSchema);
module.exports = userModel;