const PurchaseProductModel = require('../model/PurchaseProductModel');

class PurchaseProductController {

    /* Inserir banco de dados */
    async create(req, res) {
        const purchaseProduct = new PurchaseProductModel(req.body);
        await purchaseProduct
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
        await PurchaseProductModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

}

module.exports = new PurchaseProductController();