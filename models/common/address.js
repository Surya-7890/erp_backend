const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
  plot_no: { 
    type: Number, required: true, 
    required: [true, 'Plot Number Is Required']
  },
  street_name: { 
    type: String, required: true, 
    required: [true, 'Street Name Is Required']
  },
  city: { 
    type: Number, required: true, 
    required: [true, 'City Is Required']
  },
  pin: { 
    type: Number, required: true, 
    required: [true, 'Pin-Code Is Required']
  },
  district: { 
    type: String,
    required: [true, 'District Is Required']
  },
  state: { 
    type: String,
    required: [true, 'State Name Is Required']
  },
  country: { 
    type: String,
    required: [true, 'Country Name Is Required']
  }
})

module.exports = {
  addressSchema
}