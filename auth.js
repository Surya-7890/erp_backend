const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// const { AuthRouter } = require('./routers/auth/auth');




mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to db'))
.catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: '*' }));


app.post('/auth', (req, res) => {
  try {
    console.log(req.cookies.auth)
    res.cookie('auth', 'HelloDa', { httpOnly: false });
    res.end('hi');
  } catch (error) {
    res.end('hi');
  }
});

// app.use('/auth', AuthRouter);


app.listen(process.env.PORT || 7000, () => console.log('server running'))