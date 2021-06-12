const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Admin schema 
const UserSchema =new Schema({
    email : {
        type : String,
        unique: true,
        required: true
    },
    password: {
        type : String,
        unique: true,
    },   
})

const User = mongoose.model('User', UserSchema);
module.exports = User;