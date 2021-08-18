const PeriodoAgendamento = require('../comum/horarioComercial');
const salasAgendamentos = require('../comum/salasAgendamentos');
const moment = require('moment');

module.exports = {
    
    agendamentoPermitido(data, hora, sala) {
        //data = data.replace("/","").replace("/","");
        //hora = hora.replace(":","");
        var dataCompleta = moment(data, "DD MM YYYY");
        
        if  (PeriodoAgendamento.HorarioComercial(dataCompleta) && salasAgendamentos.salaDisponivel(sala))
            return true;
        else
            return false;
    }
}
