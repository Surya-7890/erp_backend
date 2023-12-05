const { Schema, Types, model } = require("mongoose");

const currentDetailsSchema = new Schema({
  original_id: {
    type: Types.ObjectId,
    required: [true, 'Id Is Required']
  },
  date_of_joining: { 
    type: Date, 
    required: [true, 'Date Of Joining Is Required'] 
  },
  designation: { 
    type: String, 
    enum: ['HOD', 'Staff'],
    required: [true, 'Designation Is Required'] 
  },
  job_status: { 
    type: String, 
    required: [true, 'Job Status Is Required'] 
  },
  job_profile: { 
    type: String, 
    required: [true, 'Job Profile Is Required'] 
  },
  current_ctc: { 
    type: Number, 
    required: [true, 'Current CTC Is Required'] 
  },
})