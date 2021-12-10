const MaisVendidosModel = require('../model/MaisVendidosModel');

class MaisVendidosController {

    /* Inserir banco de dados */
    async create(req, res) {
        const product = new MaisVendidosModel(req.body);
        await product
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    /* Atualizar banco de dados */
    async update(req, res) {
        await MaisVendidosModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    /* Select todos */
    async all(req, res) {
        await MaisVendidosModel.find()
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
}

module.exports = new MaisVendidosController();