const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateToken = (userId) => {
  const payload = { userId };
  const secret = process.env.JWT_SECRET; 
  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secret, options);
};

const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

module.exports = { generateToken, verifyToken };
