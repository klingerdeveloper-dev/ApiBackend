const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ManufacturerSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    created: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Manufacturer', ManufacturerSchema);