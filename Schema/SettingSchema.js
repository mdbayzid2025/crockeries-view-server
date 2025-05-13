import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema({
  siteName: { type: String, required: true },
  vatNo: { type: String },  
  mobile: { type: String, required: true },
  address: { type: String },
  district: { type: String },
  email: { type: String },
  ownerName: { type: String },
  photo: { type: String }, // URL or path
  logo: { type: String },  // URL or path
}, {
  timestamps: true
});


export default mongoose.model('Setting', settingSchema); 


