const PeriodoAgendamento = require('../comum/horarioComercial');

module.exports = {
    
    agendamentoPermitido(data, hora) {
        var dataCompleta = data + hora;
        
        console.log(dataCompleta);
        if  (PeriodoAgendamento().HorarioComercial(dataCompleta))
            return true;
        else
            return false;
    }
}
