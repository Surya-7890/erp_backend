const { Schema, model } = require("mongoose");

const parentsSchema = new Schema({
  mother_name: { 
    type: String, 
    required: [true, 'Mother Name Is Required'] 
  },
  father_name: { 
    type: String, 
    required: [true, 'Father Name Is Required'] 
  },
  fathers_ccupation: { 
    type: String, 
    required: [true, 'Father Occupation Is Required'] 
  },
  guardian_mobile: { 
    type: Number 
  },
  mother_mobile: { 
    type: Number 
  },
  parent_income: { 
    type: Number, 
    required: [true, 'Parent Income Is Required'] 
  }
});