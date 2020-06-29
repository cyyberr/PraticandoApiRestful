const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdutosSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('Produtos', ProdutosSchema);