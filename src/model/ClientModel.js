const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    id: { type: Number, required: true },
    macaddress: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    /* Endereço */
    logradouro: { type: String, required: true },
    numero: { type: String, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    cep: { type: String, required: true },
    tel: { type: String, required: true },
    cel: { type: String, required: true },
    created: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Client', ClientSchema);