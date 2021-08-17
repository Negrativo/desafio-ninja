const express = require("express");

const routes = express.Router();
const agendaController = require('../src/controller/AgendaController');

routes.post('/agenda/reserva', agendaController.store);
routes.get('/agenda/listagem', agendaController.index);
routes.get('/agenda/consulta', agendaController.show);
routes.put('/agenda/alterar', agendaController.update);
routes.post('/agenda/deletar', agendaController.destroy);

module.exports = routes;