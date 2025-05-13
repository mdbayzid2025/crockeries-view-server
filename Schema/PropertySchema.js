const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  agent_name: { type: String, required: true },
  property_type: { type: String, required: true },
  price: { type: Number, required: true },
  rent_duration: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  kitchen: { type: Number, required: true },
  garage: { type: Number, required: true },
  property_area: { type: Number, required: true },
  post_office: { type: String, required: true },
  city: { type: String, required: true },
  police_station: { type: String, required: true },
  post_code: { type: String, required: true },
  country: { type: String, required: true },
  features: { type: [String], required: true },
  street: { type: String, required: true },
  images: { type: [String], required: true },
  comments: {
    type: Array,
  }
});

const Property = mongoose.model('Properties', propertySchema);

module.exports = Property;
