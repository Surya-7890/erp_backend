const jwt = require("jsonwebtoken");
// import { db } from "../src/index";

const createAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '100d' });
}

const createRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '100d' });
}

const verifyAccessToken = (token) => {
  let result;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return result = { message: 'Failed', error: err.message }
    return result = { data: decoded, message: 'Success' };
  });
  return result;
}

const verifyRefreshToken = (token) => {
  let result;
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return result = { message: 'Failed', error: err.message }
    return result = { data: decoded, message: 'Success' };
  });
  return result;
}

const generateTokens = (id, target) => {
  try {
    const accessToken = createAccessToken(id);
    const refreshToken = createRefreshToken(id);
    // const exists = db.query('SELECT * FROM Students WHERE id = $id').all({ $id: id });
    console.log(exists);

    if (!exists) {
      const result = db.query('INSERT INTO $target (token, id) VALUES ($token, $id)').all({ $token: accessToken, $id: id, $target: target });
      console.log(result);
    } else {
      const result = db.query('UPDATE Students SET token = $token WHERE id = $id').all({ $token: accessToken, $id: id });
      console.log(result);
    }
    
    return {
      accessToken,
      refreshToken
    }      
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken
}