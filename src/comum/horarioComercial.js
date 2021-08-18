module.exports = {

	HorarioComercial(dataCompleta){

		var InicioDoDia = 9
		var FinalDoDia = 18
		var Sabado = 0;
		var Domingo = 6;
		var dia = new Date(dataCompleta)
		
		var ehCedo = ( dia.getHours() <= InicioDoDia )
		var ehTarde = ( dia.getHours() >= FinalDoDia )
		var diaSemana = dia.getDay()
		var FinalDeSemana = ( diaSemana === Sabado ) || diaSemana === Domingo
		return ehCedo || ehTarde || FinalDeSemana
	}
}