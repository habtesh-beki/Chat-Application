const JWT = require('jsonwebtoken');
const User = require('../models/userModel'); 

const createToken = (id) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const expiresIn = process.env.JWT_EXPIRED_IN;

  if (!secretKey) {
    throw new Error('JWT_SECRET_KEY must be defined');
  }

  if (!expiresIn) {
    throw new Error('JWT_EXPIRED_IN must be defined');
  }

  return JWT.sign({ id }, secretKey, { expiresIn });
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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide email and password'
      });
    }

    const user = await User.findOne({ email }).select('+password');
    console.log(password === user.password)
    
    if (!user ||  password !== user.password) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password'
      });
    }

    const token = createToken(user._id);

    return res.status(200).json({
      status: 'success',
      token,
      data: {
        user,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
};
