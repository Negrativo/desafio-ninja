const mongoose = require('mongoose');

const AgendaSchema = new mongoose.Schema({
    ddata : {
        type: String,
        max:  10,
        validate: {
            validator: function(v) {
                return /\d{2}-\d{2}-\d{4}/.test(v);
            },
            message: props => `O modelo ${props.value} não se adequa ao DD/MM/AAAA`
        },
        required: [true, 'Data de agendamento requerida']
    },
    dhora : {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{2}:\d{2}/.test(v);
            },
            message: props => `O modelo ${props.value} não se adequa ao HH:MM`
        },
        required: [true, 'Horario de agendamento requerido']
    },
    nsala : {
        type: Number,
        max:  4,
        min: 1,
        required: [true, 'Local de agendamento requerido']
    }
});

module.exports = mongoose.model('Agenda',AgendaSchema);