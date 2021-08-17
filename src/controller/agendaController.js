const Agenda = require('../model/Agenda');

module.exports = {

    async show(req, res) {
        const { ddata, dhora, nsala } = req.body;

        let agenda = await Agenda.findOne( ddata, dhora, nsala);

        return res.json(agenda);
    },

    async index(req, res) {
        let agenda = await Agenda.find();

        return res.json(agenda);
    },

    async store(req, res) {
        const { ddata, dhora, nsala } = req.body;
        const data = new Date();

        let agenda = await Agenda.findOne({ ddata, dhora, nsala });

        if (!agenda)
            retorno = await Agenda.create({ ddata, dhora, nsala });
        else
            return res.status(400).send({ error : 'Not authorized'}) //retorno = { "mensagem" : "Horario já reservado"};
            
        return res.json(retorno);
    },
    
    async update(req, res) {
        
    },

    async destroy(req, res) {
        const { ddata, dhora, nsala } = req.body;

        const agenda = await Agenda.findOneAndDelete({ ddata, dhora, nsala });

        await agenda.destroy();
    }
}