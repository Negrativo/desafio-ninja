module.exports = function(data){
	
	var InicioDoDia = 9
	var FinalDoDia = 18
	var Sabado = 0;
	var Domingo = 6;

	var ForaDeHorario = function(date){
		var dia = new Date(date)
		var ehCedo = ( dia.getHours() <= InicioDoDia )
		var ehTarde = ( dia.getHours() >= FinalDoDia )
		var diaSemana = dia.getDay()
		var FinalDeSemana = ( diaSemana === Sabado ) || diaSemana === Domingo
		return ehCedo || ehTarde || FinalDeSemana
	}

	var HorarioComercial = function(data){
		return ! ForaDeHorario(data)
	}

	return {
		HorarioComercial,
		ForaDeHorario
	}
}