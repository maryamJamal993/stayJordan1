const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema=mongoose.Schema

const userSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{ timestamps: true })

module.exports = mongoose.model('User',userSchema)

