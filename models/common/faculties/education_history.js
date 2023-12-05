const { Schema, Types, model } = require("mongoose");
const { educationDetailsSchema } = require("./education_details");

const educationHistorySchema = new Schema({
  original_id: { 
    type: Types.ObjectId,
    required: [true, 'Id Is Required']
  },
  designation: {
    type: String,
    enum: ['HOD', 'Staff'],
    required: [true, 'Designation Is Required']
  },
  ssc: { 
    type: educationDetailsSchema,
    required: [true, 'SSC Is Required']
  },
  hsc: { 
    type: educationDetailsSchema,
    required: [true, 'HSC Is Required']
  },
  dip: { 
    type: educationDetailsSchema
  },
  iti: { 
    type: educationDetailsSchema 
  },
  deg: { 
    type: educationDetailsSchema 
  },
  pgd: { 
    type: educationDetailsSchema 
  },
  phd: { 
    type: educationDetailsSchema 
  },
  pdoc: { 
    type: educationDetailsSchema 
  }
});

module.exports = {
  educationHistorySchema
}