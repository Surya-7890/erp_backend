const { Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name Is Required']
  },
  rollno: {
    type: String,
    required: [true, 'Roll Number Is Required']
  },
  image: {
    type: String,
    required: [true, 'Image Is Required']
  },
  password: {
    type: String,
    required: [true, 'Password Is Required']
  },
  department: {
    type: String,
    required: [true, 'Department Name Is Required']
  }
})

module.exports = {
  userSchema
}