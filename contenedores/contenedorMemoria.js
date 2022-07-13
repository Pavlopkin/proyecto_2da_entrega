class ContenedorMemoria{
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
        this.id = 0;
    }
    save(obj){
        obj['id'] = this.arr.length + 1;
        this.arr.push(obj);
        return obj;
    }
    getById(param){
        const idx = this.arr.findIndex(obj => obj.id == param)
        if((this.arr.length+1)<param){
            console.log("no existe un producto con ese id");
        }else{
            return this.arr[idx];
        } 
    }
    getAll(){
        return this.arr;
    }
    deleteById(param){
        const idx = this.arr.findIndex(obj => obj.id == param)
        console.log(idx)
        if((this.arr.length+1)<param){
            console.log("no existe un producto con ese id");
        }else{
            this.arr.splice(idx, 1)
            console.log(`Se ha eliminado registro guardado con el ID: ${param}`)
            console.log("Operacion exitosa")
        }        
    }
    changeById(param, obj){
        const idx = this.arr.findIndex(obj => obj.id == param)
        console.log(idx)
        if((this.arr.length+1)<param){
            console.log("no existe un producto con ese id");
        }else{
            this.arr[idx] = obj;
            this.arr[idx].id = param;
            console.log("Operacion exitosa")
        }  
    }
    deleteAll(){
        this.arr.length = 0;
    }
}

module.exports = ContenedorMemoria

/*
const express = require('express')
const { Router } = express;

const app = express()
const router = Router()
const PORT = 8080

app.use('/formulario',express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const data = [
    {
      title: "Campera Gore Tex",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/gore.png",
      price:25000,
    },
    {
      title: "Puffy Shirt",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/puffy.png",
      price: 60000,
    },
    {
      title: "Bolígrafo anti gravedad",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/boligrafo.png",
      price: 1500,
    },
    {
      title: "Jimmy's Shoes",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/shoes.png",
      price: 13000,
    },
    {
      title: "Fusilli Jerry",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/fusilli.png",
      price: 1200,
    },
    {
      title: "The coffee table booky",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/bookof.png",
      price: 3500,
    },
];
*/
/*
const id = 0;
for(dato of data){
    dato.id = data.indexOf(dato) + 1;
}
router.get('/', (req, res) => {
    res.send(data)
})
router.get('/:id', (req, res) => {
    const id = req.params.id
    const producto = data.find(d => d.id == id) //busca el producto en el array
    if(producto == undefined){ 
        res.json({error:"Producto no encontrado"})
    }else{
        res.json(producto)
    }
})
router.post('/', (req, res) => {
    data.push(req.body)
    const last = data[data.length - 2].id;
    const pos = data.length - 1; //obtiene la posición del producto nuevo//
    data[pos].id = parseInt(last) + 1; //asigna id a los productos nuevos//
    res.send("se agregó un nuevo producto")
})
router.put('/:id', (req, res) => {
    const id = req.params.id
    const producto = data.find(d => d.id == id) //busca el producto en el array
    if(producto == undefined){ 
        res.json({error:"Producto no encontrado"})
    }else{
      const pos = data.indexOf(producto) //obtiene la posición del producto//
      data[pos] = req.body; 
      data[pos].id = parseInt(id);
      res.send(`se modificó el producto identificado con el id ${id}`)
    }   
})
router.delete('/:id', (req, res) => {
    const id= Number(req.params.id)
    const idx = data.findIndex(d => d.id == id)
    data.splice(idx, 1)
    res.send(`se eliminó el producto identificado con el id:${id}`)
})
app.use('/api/productos', router)

const server = app.listen( PORT, () => {
  console.log( `Server on PORT: ${PORT}` );
});
server.on( 'error', err => console.log( 'Error en el server: ' + err ) );


*/