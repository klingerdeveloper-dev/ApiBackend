const ManufacturerModel = require('../model/ManufacturerModel');

class ManufacturerController {

    /* Inserir banco de dados */
    async create(req, res) {
        const manufacturer = new ManufacturerModel(req.body);
        await manufacturer
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
        await ManufacturerModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

}

module.exports = new ManufacturerController();