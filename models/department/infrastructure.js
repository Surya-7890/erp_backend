const { Schema, model } = require("mongoose");

const infrastructureSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Infrastructure Name Is Required'],
    unique: [true, 'Infrastructure Name Should be Unique']
  },
  floor: {
    type: Number,
    required: [true, 'Infrastructure Floor Is Required']
  },
  capacity: {
    type: Number,
    required: [true, 'Infrastructure Capacity Is Required']
  },
  room_no: {
    type: Number,
    requird: [true, 'Room Number Is Required']
  },
  type: {
    type: String,
    required: [true, 'Infrastructure Type Is Required'],
    enum: ['Laboratory', 'Library', 'HQ']
  },
  department: {
    type: String,
    required: [true, 'Department Acrinym Is Required']
  }
});

module.exports = {
  Infrastructure: model('infrastructure_model', infrastructureSchema),
  infrastructureSchema
}