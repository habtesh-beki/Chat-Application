const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'User must have a name']
    },
    Email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    passwrod:{
        type:String,
        require:[true , 'User must have a passwrod'],
        minlength:6,
    },
    confirmPassword:{
        type:String,
        requrired:[true , 'confirem passwrod'],
        validate:{
             validator: function(el){
            return el == this.passwrod
        },
        message:['password not the same']
        } 
    }
      
})
const User = mongoose.model('User', userSchema)

module.exports = User;