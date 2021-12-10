const CategoryModel = require('../model/CategoryModel');

class CategoryController {

    /* Inserir banco de dados */
    async create(req, res) {
        const category = new CategoryModel(req.body);
        await category
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
        await CategoryModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    /* Select todos */
    async all(req, res) {
        await CategoryModel.find()
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

}

module.exports = new CategoryController();