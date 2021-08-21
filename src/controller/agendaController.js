const Agenda = require('../model/Agenda');

module.exports = {

    async show(req, res) {
        try {
            const { data, hora, sala } = req.body;
            
            const agenda = await Agenda.findOne({ data, hora, sala });

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
            let agenda = await Agenda.find();

            if (agenda)
                return res.status(200).json(agenda);
            else
                return res.status(404).send({ error : 'Not Found'});

        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async store(req, res) {
        try {
            const { data, hora, sala } = req.body;
                
            let agenda = await Agenda.findOne({ data, hora, sala });

            if ((!agenda)) {
                retorno = await Agenda.create({ data, hora, sala });
                return res.status(201).json(retorno);
            } else 
                return res.status(400).send({ error : 'Not authorized' });
            

        } catch (e) {
            res.status(500).send(e.message);
        }
    },
    
    async update(req, res) {
        try {
            const { data, hora, sala, _id } = req.body;
            //const { _id } = req.param._id;
            
            let agenda = await Agenda.findById(_id, { data, hora, sala });

            if (agenda) {
                await Agenda.findByIdAndUpdate(_id, { data, hora, sala });
                return res.status(200).json({ sucess : "Updation successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});

        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async destroy(req, res) {
        try {
            const { data, hora, sala, _id } = req.body;
            //const { _id } = req.param._id;
            
            let agenda = await Agenda.findById(_id, { data, hora, sala });

            if (agenda){
                await Agenda.findByIdAndDelete(_id, { data, hora, sala });
                return res.status(200).json({ sucess : "deleted successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    }
}