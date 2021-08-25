const periodoAgendamento = require('./horarioComercial');
const salasAgendamentos = require('./salasAgendamentos');

let validador = (data, hora) => {

    let date_regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    let hour_regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    let date_valid = data;
    let hour_valid = hora;

    return ( date_regex.test(date_valid) && hour_regex.test(hour_valid))
}

module.exports = {
        
    agendamentoPermitido(req, res, next) {
        const { data, hora, sala } = req.body;
        try {
            if  (validador(data, hora) && periodoAgendamento.horarioComercial(data, hora) && salasAgendamentos.salaDisponivel(sala))
                next();
            else
                return res.status(400).send({ error : 'invalid data' })
            
        } catch (e) {
            res.status(500).send(e.message);
        }
    }
}