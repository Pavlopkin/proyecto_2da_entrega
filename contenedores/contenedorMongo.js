const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId; 

class ContenedorMongo {

    constructor(uri, model) {
        this.model = model
        this.mongo = mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
            .then(db => console.log(`DB is connected`))
            .catch(err => console.log(err));
    }

    async save(obj) {
        const newProduct = new this.model(obj);
        await newProduct.save()

        return newProduct
    }
    async getById(param) {
        return this.model.find({_id: new ObjectId(param)})
    }
    async getAll() {
        return this.model.find({})
    }
    async deleteById(param) {
        const userDelete = await this.model.deleteOne({_id: new ObjectId(param)})
        return true
    }
    async changeById(param, obj){
        console.log('UPDATE');
        const objUpdated = await this.model.updateOne(
            { _id: new ObjectId(param)},
            { $set: obj }
        )
        
        return objUpdated
    }
    async deleteAll(){
        await this.model.deleteMany({})
    }
}

module.exports = ContenedorMongo;