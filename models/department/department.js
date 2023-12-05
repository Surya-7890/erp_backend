const { Schema, model } = require("mongoose");

const departmentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Department Name Is Required']
  },
  acronym: {
    type: String,
    required: [true, 'Department Acronym Is Required']
  }
});

module.exports = {
  departmentSchema,
  Department: model('department_model', departmentSchema)
}