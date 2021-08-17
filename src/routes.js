const express = require("express");

const routes = express.Router();
const agendaController = require('../src/controller/AgendaController');

routes.post('/agenda/reserva', agendaController.store);
routes.get('/agenda/listagem', agendaController.index);

module.exports = routes;