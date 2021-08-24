const test = require('tape');
const horarioComercial = require('./src/comum/horarioComercial')
const agendamentoPermitido = require('./src/comum/validation');
const agendaController = require ('./src/controller/agendaController');

test('E possivel agendar sala no dia 12/08/2021 (quarta-feira) as 10:00 na sala 2', (t) => {
    t.assert(agendamentoPermitido.agendamentoPermitido({ data: '12/08/2021', hora: '10:00', sala: 2}) === true, "Horario comercial valido");
    t.end();
});

test('Horario comercial com horario invalido', (t) => {
    t.assert(agendamentoPermitido.agendamentoPermitido({ data: '22/08/2021', hora: '06:00', sala: 1}) === false, "Horario comercial invalido");
    t.end();
})
