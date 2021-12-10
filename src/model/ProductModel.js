const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    reference: { type: Number },
    /* FKs */
    idcategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    idmanufacturer: { type: Schema.Types.ObjectId, ref: 'Manufacturer' },
    created: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Product', ProductSchema);