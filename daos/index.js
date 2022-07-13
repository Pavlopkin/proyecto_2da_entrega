const CartMemoryDAO = require('./cart/cartMemoryDAO')
const ProductMemoryDAO = require('./products/productMemoryDAO')
const ProductFileDAO = require('./products/productFileDAO')
const CartFileDAO = require('./cart/cartFileDAO')
const ProductMongoDAO = require('./products/productMongoDAO')
const CartMongoDAO = require('./cart/cartMongoDAO')

 const Factory = (typeDB) => {

    if(typeDB == 'memory') {
        return {
            cart: new CartMemoryDAO(),
            product: new ProductMemoryDAO(),
        }
    } else if (typeDB == 'file') {
        return {
            cart: new CartFileDAO(),
            product: new ProductFileDAO(),
        }
    } else if (typeDB == 'mongo') {
        return {
            cart: new CartMongoDAO(),
            product: new ProductMongoDAO(),
        }
    }
    throw new Error('typeDB is not found')
}

module.exports = Factory;