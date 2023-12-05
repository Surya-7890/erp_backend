const { Schema, model } = require("mongoose");

const documentSchema = new Schema({
  aadhar: {
    type: String,
    required: [true, 'Aadhar Is Required']
  },
  community_certificate: {
    type: String,
    required: [true, 'Community Certificate Is Required']
  },
  transfer_certificate: {
    type: String,
    required: [true, 'Transfer Certificate Is Required']
  }
})

module.exports = {
  documentSchema
}