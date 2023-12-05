const express = require('express');
const router = express.Router();

import { verifyStudent } from '../../middlewares/verifyStudent';

router.post('/student', verifyStudent, async (req, res) => {
  try {
    res.json({ message: 'Success' });
  } catch (error) {
    res.json({ message: 'Failed', error: error.message });
  }
});



/**
 *  todo ~ do the verification for others as well
*/


// router.post('/staff', verifyStudent, async (req, res) => {
//   try {
//     res.json({ message: 'Success' });
//   } catch (error) {
//     res.json({ message: 'Failed', error: error.message });
//   }
// });


// router.post('/hod', verifyStudent, async (req, res) => {
//   try {
//     res.json({ message: 'Success' });
//   } catch (error) {
//     res.json({ message: 'Failed', error: error.message });
//   }
// });


// router.post('/parents', verifyStudent, async (req, res) => {
//   try {
//     res.json({ message: 'Success' });
//   } catch (error) {
//     res.json({ message: 'Failed', error: error.message });
//   }
// });


module.exports = {
  VerifyRouter: router
}