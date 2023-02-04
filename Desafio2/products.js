const ProductManager = require("./ProductManager");

let pm= new ProductManager("./productos.json"); 

pm.getProducts().then(productos=>{
    console.log(productos);
});

let product = {
    title : "fidep",
    description : "spaguetti",
    price : "180",
    thumbnail : "no img",
    code : 2,
    stock : 15
}


pm.getProducts(product).then(res=>{

});

pm.addProduct(product).then(res=>{

});

pm.getProductById(product).then(res=>{

});
pm.updateProduct(product).then(res=>{

});
pm.deleteProduct(product).then(res=>{

});