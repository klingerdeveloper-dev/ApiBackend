const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    created: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Category', CategorySchema);