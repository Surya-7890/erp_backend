const { Schema, model } = require("mongoose");

const educationDetailsSchema = new Schema({
  department: { 
    type: String, 
    required: [true, 'Department Is Required'] 
  },
  specialization: { 
    type: String, 
    required: [true, 'Specalization Is Required'] 
  },
  batch: { 
    type: String, 
    required: [true, 'Batch Is Required'] 
  },
  institution_name: { 
    type: String, 
    required: [true, 'Institution Name Is Required'] 
  },
  university: { 
    type: String, 
    required: [true, 'University Is Required'] 
  },
  registration_number: { 
    type: String, 
    required: [true, 'Registration Number Is Required'] 
  },
  aggregate_percent: { 
    type: String, 
    required: [true, 'Aggregate Percentage Is Required'] 
  },
  history_of_arrears: { 
    type: Number, 
    required: [true, 'Hostory Of Arrears Is Required'] 
  },
  rank: { 
    type: Number, 
    required: [true, 'Rank Is Required'] 
  },
  passing_year: { 
    type: String, 
    required: [true, 'Passing Year Is Required'] 
  },
})

module.exports = {
  educationDetailsSchema
}