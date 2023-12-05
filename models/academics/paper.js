const { Schema, Types, model } = require("mongoose");

const paperSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Paper Name Is Required']
  },
  credits: {
    type: Number,
    required: [true, 'Credit Score Is Required']
  },
  type: {
    type: String,
    required: [true, 'Paper Type Is Required'],
    enum: ['Core', 'Laboratory', 'Elective', 'Non-Academic']
  },
  modules: {
    type: [Types.ObjectId],
    ref: 'module_model',
    default: []
  },
  staff: {
    type: [Types.ObjectId],
    ref: 'staff_model',
    default: []
  }
});

module.exports = { 
  Paper: model('paper_model', paperSchema), 
  paperSchema 
}