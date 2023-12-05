const { Schema, model } = require("mongoose");

const moduleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Module Name Is Required']
  }
});

module.exports = {
  Module: model('module_model', moduleSchema)
}