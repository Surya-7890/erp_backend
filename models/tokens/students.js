const { Schema, model, Types } = require('mongoose');

const StudentTokensSchema = new Schema({
  token: {
    type: String,
    required: [true, 'Token Is Required']
  },
  student_id: {
    type: Types.ObjectId,
    required: [true, 'Student Id Is Required'],
    unique: true
  }
})

module.exports = {
  StudentTokens: model('student_tokens', StudentTokensSchema)
}