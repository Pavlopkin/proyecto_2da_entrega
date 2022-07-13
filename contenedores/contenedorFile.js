const fs = require('fs')

class ContenedorArchivo{
    constructor(){
        this.arr = [
            {
                title: "Campera Gore Tex",
                thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/gore.png",
                price:25000,
                id: 1
              },
              {
                title: "Puffy Shirt",
                thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/puffy.png",
                price: 60000,
                id: 2
              },
              {
                title: "Bolígrafo anti gravedad",
                thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/boligrafo.png",
                price: 1500,
                id: 3
              },
              {
                title: "Jimmy's Shoes",
                thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/shoes.png",
                price: 13000,
                id: 4
              },
              {
                title: "Fusilli Jerry",
                thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/fusilli.png",
                price: 1200,
                id: 5
              },
              {
                title: "The coffee table booky",
                thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/bookof.png",
                price: 3500,
                id: 6
              },
        ]
    }
    save(obj){
        obj['id'] = this.arr.length + 1;
        this.arr.push(obj);
        fs.appendFileSync('./test.txt', JSON.stringify(this.arr, null, '\t'))
            try{
                console.log(`Producto agregado el producto ${obj.name} al archivo`)
            } catch (err) {
                console.log("hubo un error al crear el archivo")
                console.log(err)
        } 
        return obj;
    }
    getById(param){
        const idx = this.arr.findIndex(obj => obj.id == param)
        if((this.arr.length+1)<param){
            console.log("no existe un producto con ese id");
        }else{
            this.arr.splice(idx, 1)
            return this.arr[idx];
        } 
    }
    getAll(){
        try{
            let data = fs.readFileSync('./test.txt', 'utf-8')
            return data
        }catch(err){
            console.log("Error al leer el archivo" + err)
        }
    }
    deleteById(param){
        const idx = this.arr.findIndex(obj => obj.id == param)
        if((this.arr.length+1)<param){
            console.log("no existe un producto con ese id");
        }else{
            this.arr.splice(idx, 1)
            console.log(`Se ha eliminado registro guardado con el ID: ${param}`)
            fs.writeFileSync('./test.txt', JSON.stringify(this.arr, null, '\t'))  
        }        
    }
    changeById(param, obj){
        const idx = this.arr.findIndex(obj => obj.id == param)
        if((this.arr.length+1)<param){
            console.log("no existe un producto con ese id");
        }else{
            this.arr[idx] = obj;
            this.arr[idx].id = param;
            console.log("Operacion exitosa")
            fs.writeFileSync('./test.txt', JSON.stringify(this.arr, null, '\t'))
        }  
    }
    deleteAll(){
        fs.unlinkSync('./test.txt');
    }
}


module.exports = ContenedorArchivo



