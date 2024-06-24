const JWT = require('jsonwebtoken');
const User = require('../models/userModel'); 

const { JWT_SECRET_KEY, JWT_EXPIRED_IN } = process.env;

const createToken = (id) => {
  return JWT.sign({ id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRED_IN,
  });
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword, 
    });

const token = createToken(newUser._id);
  console.log(req.body.name)
    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.login = async(req,res) => {
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
        res.status(404).json({
            status:'fail',
            message:error.message
        }) 
    }
};