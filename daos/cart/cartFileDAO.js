const ContenedorArchivo = require('../../contenedores/contenedorFile')

class CartFileDAO extends ContenedorArchivo {
    constructor(){
        super('DB_cart.json')
    }
}

module.exports = CartFileDAO;
