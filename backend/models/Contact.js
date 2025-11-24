const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true, trim: true, maxlength: 150 },
  email: { type: String, trim: true, lowercase: true },
  phone: { type: String, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);