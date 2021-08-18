const Agenda = require('../model/Agenda');
const validacao = require('../comum/validation');

module.exports = {

    async show(req, res) {
        try {
            const { data, hora, sala } = req.query;

            if (validacao.agendamentoPermitido(data, hora, sala)) {
                const agenda = await Agenda.findOne({ ddata: data, dhora: hora, nsala: sala });

                if (agenda)
                    return res.status(200).json(agenda);
                else
                    return res.status(404).send({ error : 'Not Found'});
            
            } else {
                return res.status(400).send({ error : 'invalid data' })
            }

        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async index(req, res) {
        try {
            let agenda = await Agenda.find();

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
            const { data, hora, sala } = req.query;
            
            if (validacao.agendamentoPermitido(data, hora, sala)) {
                console.log(data, hora, sala);
                let agenda = await Agenda.findOne({ data, hora, sala });

                if ((!agenda)) {
                    retorno = await Agenda.create({ ddata: data, dhora: hora, nsala: sala });
                    return res.status(201).json(retorno);
                } else {
                    return res.status(400).send({ error : 'Not authorized' });
                }

            } else {
                return res.status(400).send({ error : 'invalid data' })
            }
        } catch (e) {
            res.status(500).send(e.message);
        }
    },
    
    async update(req, res) {
        try {
            const { ddata, dhora, nsala } = req.query;
            if (validacao.agendamentoPermitido(data, hora)) {
                let agenda = await Agenda.findOne({ ddata, dhora, nsala });

                if (agenda) {
                    const updateAgenda = await agenda.update(_id, { ddata, dhora, nsala });
                    return res.status(200).json(retorno);
                } else
                    return res.status(400).send({ error : 'Not authorized'});

            } else {
                return res.status(400).send({ error : 'invalid data' })
            }
        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async destroy(req, res) {
        try {
            const { data, hora, sala } = req.query;
            if (validacao.agendamentoPermitido(data, hora)) {
                const agenda = await Agenda.findOneAndDelete({  ddata: data, dhora: hora, nsala: sala });

                if (agenda)
                    await agenda.destroy();
            } else {
                return res.status(400).send({ error : 'invalid data' })
            }
        } catch (e) {
            res.status(500).send(e.message);
        }
    }
}