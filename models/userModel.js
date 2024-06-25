const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
      },
      email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: [true,"this email alrady taken"],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password:{
        type:String,
        require:[true , 'User must have a passwrod'],
        minlength:6,
        select:false
    },
    confirmPassword:{
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
          validator: function(el) {
            return el === this.password;
          },
          message: 'Passwords are not the same!'
        }
    }
      
})
userSchema.methods.comparePassword = async function(
    candidatePassword , userPassword){
    return  bcrypt.compare(candidatePassword , userPassword)
}
const User = mongoose.model('User', userSchema)

module.exports = User;