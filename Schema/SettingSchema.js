const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  site_name: { type: String, required: true },
  vat_no: { type: String },  
  mobile: { type: String, required: true },
  address: { type: String },
  district: { type: String },
  email: { type: String },
  owner_name: { type: String },
  photo: { type: String },
  logo: { type: String },  
}, {
  timestamps: true
});

const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;
