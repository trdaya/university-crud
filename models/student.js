const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is mandatory'],
  },
  age: {
    type: Number,
  },
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;