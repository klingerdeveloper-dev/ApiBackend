const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const MaisVendidosSchema = new Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true },
    descricao : { type: String, required: true },
    quatidade: { type: Number, required: true, default: 0 },
    preco: { type: Number, required: true, default: 0 },
    imageUrl : { type: String, required: true },
    reference: { type: Number },
    /* FKs */
    idcategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    idmanufacturer: { type: Schema.Types.ObjectId, ref: 'Manufacturer' },
    dtCriacao: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('MaiVendidos', MaisVendidosSchema);