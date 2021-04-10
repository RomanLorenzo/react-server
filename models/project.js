const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
   name: {
      type: String,
      min: 5,
      min: 100,
      required: true
   },
   thumbnail: {
      type: String,
      min: 5,
      max: 1000,
      required: true,
   },
   description: {
      type: String,
      min: 10,
      max: 5000
   }
})

const project = mongoose.model('project', projectSchema);
module.exports = project;