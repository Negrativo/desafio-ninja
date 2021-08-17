const mongoose = require('mongoose');

const AgendaSchema = new mongoose.Schema({
    ddata : String,
    dhora : String,
    nsala : Number
});

module.exports = mongoose.model('Agenda',AgendaSchema);