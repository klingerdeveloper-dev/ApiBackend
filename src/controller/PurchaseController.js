const PurchaseModel = require('../model/PurchaseModel');

class PurchaseController {

    /* Inserir banco de dados */
    async create(req, res) {
        const purchase = new PurchaseModel(req.body);
        await purchase
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
        await PurchaseModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    /* Select todos */
    async all(req, res) {
        await PurchaseModel.find({ macaddress: { '$in': req.params.macaddress } })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
}

module.exports = new PurchaseController();