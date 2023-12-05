const { Schema, Types, model } = require("mongoose");

const semesterSchema = new Schema({
  sem: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8],
    required: [true, 'Semester Is Required']
  },
  department: {
    type: String,
    required: [true, 'Department Is Required']
  },
  papers: {
    type: [Types.ObjectId],
    ref: 'paper_model',
    default: []
  }
})

module.exports = {
  Semester: model('semester', semesterSchema)
}