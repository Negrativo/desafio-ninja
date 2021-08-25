const agendaController = require('./controller/AgendaController');
const validacao = require('./comum/validation');
const express = require("express");

const routes = express.Router();

routes.post('/agenda/reserva', validacao.agendamentoPermitido, agendaController.store);
routes.get('/agenda/listagem', agendaController.index);
routes.get('/agenda/consulta', agendaController.show);
routes.put('/agenda/alterar', validacao.agendamentoPermitido, agendaController.update);
routes.post('/agenda/deletar', validacao.agendamentoPermitido, agendaController.destroy);

module.exports = routes;