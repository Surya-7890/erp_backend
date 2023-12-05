const { Schema, model } = require("mongoose");

const bankDetailsSchema = new Schema({
  original_id: { 
    type: Types.ObjectId,
    required: [true, 'Id Is Required']
  },
  designation: {
    type: String,
    enum: ['HOD', 'Staff'],
    required: [true, 'Designation Is Required']
  },
  bank_name: {
    type: String,
    required: [true, 'Bank Name Is Required'],
    minLength: 7,
  },
  account_number: {
    type: String,
    required: [true, 'Account Number Is Required'],
    unique: [true, 'Account Number Should Be Unique'],
  },
  branch: {
    type: String,
    required: [true, 'Branch Name Is Required'],
  },
  ifsc: {
    type: String,
    required: [true, 'IFSC Is Required'],
    maxLength: 11,
    minLength: 11,
  }
})