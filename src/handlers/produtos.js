const ProdutosRepository = require('../repositories/produtos');

const transformer = produtos => ({
    type: 'produtos',
    id: produtos.id,
    attributes: {
        name: produtos.name,
        price: produtos.price,
    },
    links: {
        self: `/api/v1/produtos/${produtos.id}`
    }
});

const getAll = async () => {
    const produtos = await ProdutosRepository.getAll({});
    return { data: produtos.map(transformer) };
};

const find = async (req) => {
    const produtos = await ProdutosRepository.find(req.params.id);
    return { data: transformer(produtos) };
};

const save = async (req, h) => {
    const produtos = await ProdutosRepository.save(req.payload);

    return h.response(transformer(produtos)).code(201);
};

const remove = async (req, h) => {
    await ProdutosRepository.remove(req.params.id);
    return h.response().code(204);
};

module.exports = {
    getAll,
    save,
    remove,
    find
};