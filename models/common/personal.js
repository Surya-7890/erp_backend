const { Schema, model } = require("mongoose");

const personalInfoSchema = new Schema({
  original_id: { 
    type: String, 
    required: [true, 'Id Is Required'] 
  },
  gender: { 
    type: String, 
    required: [true, 'gender Is Required'] 
  },
  dob: { 
    type: Date, 
    required: [true, 'Date Of Birth Is Required'] 
  },
  nationality: { 
    type: String, 
    required: [true, 'Nationality Is Required'] 
  },
  mother_tongue: { 
    type: String, 
    required: [true, 'Mother Tongue Is Required'] 
  },
  religion: { 
    type: String, 
    required: [true, 'Religion Is Required'] 
  },
  caste: { 
    type: String, 
    required: [true, 'Caste Is Required'] 
  },
  sub_caste: { 
    type: String, 
    required: [true, 'Sub-Caste Is Required'] 
  },
  blood_group: { 
    type: String, 
    required: [true, 'Bloog Group Is Required'] 
  },
  handicapped: { 
    type: Boolean, 
    required: [true, 'Handicapped Or Not Is Required'] 
  },
  mobile: { 
    type: Number, 
    required: [true, 'Mobile Number Is Required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email Is Required'] 
  }
});

module.exports = {
  personalInfoSchema
}