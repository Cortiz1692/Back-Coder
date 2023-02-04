const fs = require("fs");



class Producto {
    constructor(id, title, description, price, thumbnail, code, stock) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }

class ProductManager {
    constructor(file) {
        this.path = file;
      }


    async getProducts() {
        if (fs.existsSync(this.path)) {
          let reedF = await fs.promises.readFile(this.path, "utf-8");
          return JSON.parse(reedF);
        } else {
          return [];
        }
      }


      async addProduct(title, description, price, thumbnail, code, stock) {
        let products = await this.getProducts();
        let position = products.findIndex((producto) => producto.code === code) !== -1;
        if (position) {
          console.log(`El producto con ese codigo ya existe ${position}`);
        } else {
          let id = products.length + 1;
          let newProduct = new Producto(id, title, description, price, thumbnail, code, stock);
          products.push(newProduct);
          await fs.promises.writeFile(this.path, JSON.stringify(products,null,5));
          console.log(`Product ${title} added with ID ${id}`);
        }
      }

   
      async getProductById(id) {
        let products = await this.getProducts();
        let index = products.findIndex((product) => product.id === id);
        let exists = index !== -1;
        if (exists) {
          return products[index];
        } else {
          console.log("El producto seleccionado no existe!!!!");
        }
      }

      async updateProduct(id, title, description, price, thumbnail, code, stock) {
        let products = await this.getProducts();
        let index = products.findIndex((product) => product.id === id);
        let exists = index !== -1;
        if (exists) {
          products[index].title = title;
          products[index].description = description;
          products[index].price = price;
          products[index].thumbnail = thumbnail;
          products[index].code = code;
          products[index].stock = stock;
          await fs.promises.writeFile(this.path, JSON.stringify(products,null,2));
          console.log(`El prodecto se actualizo correctamente`);
        } else {
          console.log("No se encontro el producto");
        }
      }

      async deleteProduct(id) {
        let products = await this.getProducts();
        let index = products.findIndex((product) => product.id === id) !== -1;
        if (index) {
          products[index] = {};
          
          await fs.promises.writeFile(this.path, JSON.stringify(products,null,2));
          console.log(`Poducto eliminado`);
        } else {
          console.log("No se encontro el producto");
        }
      }
    }

    let pm = new ProductManager("./products.json");



    
   // module.exports = ProductManager;
    
