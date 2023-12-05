const jwt = require('jsonwebtoken');
const { StudentTokens } = require('../models/tokens/students'); 
const { verifyAccessToken } = require('../functions/token');

const verifyStudent = async (req, res, next) => {
  try {
    const cookie = req.cookies.auth;

    // if no cookie is sent with the request
    if (!cookie) return res.json({ message: 'Failed', error: 'Unauthorized' });

    // checking if the cookie is a jwt signed by this app
    const result = verifyAccessToken(cookie);

    // if the cookie has something else instead of token or expired token
    if (result.message === 'Failure') return res.json(result);


    // if the decoded value has no id in it
    if (!result.data.id) return res.json({ message: 'Failure', error: 'Error' });


    // checking if the token is valid
    const student = await StudentTokens.findOne({  student_id: result.data.id });

    // not expired but invalid
    if (!student) return res.json({ message: 'Failure', error: 'Invalid Token' });

    req.id = result.data.id;
    next()
  } catch (error) {
    res.json({ message: 'Failed', error: error.message })
  }
}

module.exports = {
  verifyStudent
}