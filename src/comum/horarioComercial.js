const moment = require('moment');

module.exports = {

	horarioComercial(data, hora){
		let inicioDoDia = 9;
		let finalDoDia = 18;
		let sabado = 0;
		let domingo = 6;

		let dataCompleta = moment(moment(`${data} ${hora}`, 'DD/MM/YYYY hh:mm').format());
		let horarioAgendamento = dataCompleta.hours();
		let diaSemana = dataCompleta.day();
		
		let ehHorarioComercial = ( inicioDoDia <= horarioAgendamento ) && ( horarioAgendamento <= finalDoDia );
		let finalDeSemana = ( diaSemana === sabado ) || diaSemana === domingo;
		
		return (ehHorarioComercial && !finalDeSemana);
	}
}