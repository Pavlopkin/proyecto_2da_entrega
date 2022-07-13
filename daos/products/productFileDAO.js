const ContenedorArchivo = require('../../contenedores/contenedorFile')

class ProductFileDAO extends ContenedorArchivo {
    constructor(){
        super('DB_products.json')
    }
}

module.exports = ProductFileDAO;