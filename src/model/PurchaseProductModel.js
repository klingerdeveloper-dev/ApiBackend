const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PurchaseProductSchema = new Schema({
    id: { type: Number, required: true },
    idpurchase: { type: Schema.Types.ObjectId, ref: 'Purchase' },
    qtd: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
    /* Data criação na tabela */
    created: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('PurchaseProduct', PurchaseProductSchema);