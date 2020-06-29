const produtosHandler = require('./handlers/produtos');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/produtos',
        handler: produtosHandler.getAll
        
    },

    {
        method: 'GET',
        path: '/api/v1/produtos/{id}',
        handler: produtosHandler.find
        
    },

    {
        method: 'POST',
        path: '/api/v1/produtos',
        handler: produtosHandler.save
        
    },

    {
        method: 'DELETE',
        path: '/api/v1/produtos/{id}',
        handler: produtosHandler.remove,
        options: {
            cors: true
        }
        
    }
]