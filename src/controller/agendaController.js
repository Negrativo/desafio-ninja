const Agenda = require('../model/Agenda');

module.exports = {

    async show(req, res) {
        try {
            const data = req.param.data;
            const hora = req.param.hora;
            const sala = req.param.sala;

            let agenda = await Agenda.where({ ddata: data, dhora: hora, nsala: sala });
            if (agenda)
                return res.status(200).json(agenda);
            else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async index(req, res) {
        try {
            let agenda = await Agenda.find(req.param.id);

            if (agenda)
                return res.status(201).json(agenda);
            else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async store(req, res) {
        try {
            const { ddata, dhora, nsala } = req.body;
            const data = new Date();

            let agenda = await Agenda.findOne({ ddata, dhora, nsala });

            if (!agenda) {
                retorno = await Agenda.create({ ddata, dhora, nsala });
                return res.status(201).json(retorno);
            } else
                return res.status(400).send({ error : 'Not authorized'});

        } catch (e) {
            res.status(500).send(e.message);
        }
    },
    
    async update(req, res) {
        try {
            const { ddata, dhora, nsala } = req.body;
            let agenda = await Agenda.findOne({ ddata, dhora, nsala });

            if (agenda) {
                const updateAgenda = await agenda.update(_id, { ddata, dhora, nsala });
                return res.status(200).json(retorno);
            } else
                return res.status(400).send({ error : 'Not authorized'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async destroy(req, res) {
        try {
            const { ddata, dhora, nsala } = req.body;

            const agenda = await Agenda.findOneAndDelete({ ddata, dhora, nsala });

            await agenda.destroy();
        } catch (e) {
            res.status(500).send(e.message);
        }
    }
}