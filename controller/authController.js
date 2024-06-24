const JWT = require('jsonwebtoken')
const User = require('./../models/userModel')

const createToken = (id) => {
   JWT.sign({id} , process.env.JWT_SECREATE_KEY , {
    expiresIn:process.env.JWT_EXPIRED_IN
   })
}


exports.signup = (async(req, res) => {
    try{
        const newUser =await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirempassword:req.body.confirempassword 
    })
     const token = createToken(newUser._id)

     res.status(201).json({
        status:'success',
        token,
        data:{
            newUser
        }
     })
    }catch{

    }
    
});
exports.login = (async(req,res) => {
    try{
      const currentUser =await User.find(req.body);

     const token = createToken(currentUser._id)

     res.status(200).json({
        status:'success',
        token,
        data:{
            currentUser
        }
     })
    }catch{

    }
 
});