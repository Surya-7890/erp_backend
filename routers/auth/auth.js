const express = require('express');
const router = express.Router();

const { verifyAccessToken } = require('../../functions/token');
const { VerifyRouter } = require('./verify');
 
router.use('/verify', VerifyRouter)

router.post('/refresh', async (req, res) => {
  try {
    const cookie = req.cookies.auth;
  } catch (error) {
    
  }
})


module.exports = {
  AuthRouter: router
}