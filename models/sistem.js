const mongoose = require('mongoose')

const sistemVeri = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sistemVeriKanal: {
    type: String,
    required: true
  },
  Sistem: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Sistem', sistemVeri)
