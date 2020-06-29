const ProdutosModel = require('../models/produtos');

const getAll = async () => await ProdutosModel.find({});

const find = async id => await ProdutosModel.findById(id);

const save = async (payload) => {
    const {name, price} = payload;

    const produtos = new ProdutosModel;
    produtos.name = name;
    produtos.price = price;

    await produtos.save();

    return produtos;
};

const remove = async id => await ProdutosModel.findOneAndDelete({ _id: id });

module.exports = {
    getAll,
    save,
    remove,
    find
};