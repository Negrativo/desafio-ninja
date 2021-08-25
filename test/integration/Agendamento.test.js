const request = require('supertest');
const app = require('../../server');

const req = require('../Data/Dados.json');


describe('Agendamentos', () => {
    it('Esta sendo listado todos os agendamentos cadastrado?', async () => {
        const response = await request(app).get("/agenda/listagem");
        expect(response.status).toBe(200);
    });

    it('e permitido agendamento em horario comercial no periodo 18/08/2021 as 10:00 na sala 1?', async () => {
        const response = await request(app)
            .post("/agenda/reserva")
            .send( req.body, req.response);
            
        req.body = response.body;
        
        expect(response.status).toBe(201);
    });

    it('e possivel consultar o agendamento recem cadastrado anteriormente?', async () => {
        const response = await request(app)
            .get("/agenda/consulta")
            .send( req.body, req.response );
        
        expect(response.status).toBe(200);
    });

    it('e possivel alterar o agendamento recem cadastrado para a sala 2 e as 15:00 horas?', async () => {
        const response = await request(app)
            .put("/agenda/alterar")
            .send( req.body, req.response );
            
        expect(response.status).toBe(200);
    });
})
