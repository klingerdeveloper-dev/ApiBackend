const mongoose = require('../config/database');
//const product = require('ProductModel');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
    macaddress: { type: String, required: true },
    id: { type: Number, required: true },
    idclient: { type: Schema.Types.ObjectId, ref: 'Client' },
    created: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('purchase', PurchaseSchema);