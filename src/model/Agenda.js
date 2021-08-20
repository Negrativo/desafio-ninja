const mongoose = require('mongoose');

const agendaSchema = new mongoose.Schema({
    ddata : {
        type: String,
        max:  10,
        validate: {
            validator: v => /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(v),
            message: props => `O modelo ${props.value} não se adequa ao DD/MM/AAAA`
        },
        required: [true, 'Data de agendamento requerida']
    },
    dhora : {
        type: String,
        validate: {
            validator: v => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v),
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

module.exports = mongoose.model('agenda',agendaSchema);