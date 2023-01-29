class ProductManager {

    constructor() {
        this.productos = [];
    }

    /**
     * Debe contar con un método “getProducts” el cual debe devolver el 
     * arreglo con todos los productos creados hasta ese momento
     */
    getProductos() {
        return this.productos;
    }

    nuevoProducto(id, title, description, price, thumbnail, code, stock,) {
        let nuevoProducto = {
            id: id,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            productos: [],
        }
        if (this.productos.length === 0) {
            nuevoProducto.id = 1
        } else {
            nuevoProducto.id = this.productos.length + 1;
        }
        this.productos.push(nuevoProducto);
    }


    /**
     * 
     * Debe contar con un método “addProduct” el cual agregará un producto  
     *  al arreglo de productos inicial.
        Validar que no se repita el campo “code” y que todos los campos sean 
        obligatorios
         Al agregarlo, debe crearse con un id autoincrementable**/


    addProduct(codeProducto) {
        let position = this.productos.findIndex(producto => producto.code === codeProducto);
        if (position === -1) {
            console.log(`El producto no existe ${codeProducto}`);
            return
        } else {
            let nvoProducto = this.productos[position].nvoProducto.findIndex(nvoProducto => nvoProducto === codeProducto);
            if (nvoProducto === -1) {
                nvoProducto = this.productos[position].nvoProducto.push(codeProducto);
            } else {
                console.log(`Este producto ${codeProducto} ya se encuentra en la lista `)
            }
        }

    }

    /**
     * Debe contar con un método “getProductById” el cual debe buscar en el 
     *  arreglo el producto que coincida con el id
       En caso de no coincidir ningún id, mostrar en consola un error “Not 
    found”
     */
    getProductById(id) {
        let productoIndx = this.productos.findIndex(p => p.id == id);
        if (productoIndx === -1) {
            console.log('Not found');
        } else {
            return this.productos[productoIndx];
        }

    }
}

let tm = new ProductManager();
tm.nuevoProducto("Los 4 acuerdos", "books", "book of terror", 500, "no contain img", 1, 20)
console.log(tm.getProductos());