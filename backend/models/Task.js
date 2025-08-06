const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: 'Pending' },
  internId: { type: mongoose.Schema.Types.ObjectId, ref: 'Intern' }
});

module.exports = mongoose.model('Task', taskSchema);
