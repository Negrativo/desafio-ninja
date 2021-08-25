const horarioComercial = require('../../src/comum/horarioComercial');
const salasPermitidas = require('../../src/comum/salasAgendamentos');

const req = require('../Data/Dados.json');

describe('Validações dos dados', () => {

    it('O periodo utilizado de data e hora são validos para agendamento?', () => {
        const result = horarioComercial.horarioComercial(req.body.data, req.body.hora)
        expect(result).toBe(true);
    });

    it('A sala solicitada é valida para agendamento?', () => {
        const result = salasPermitidas.salaDisponivel(req.body.sala)
        expect(result).toBe(true);
    });
})