// index.js
const Product = require('./product');
const ProductPrototype = require('./productPrototype');

// Crear un producto base
const originalProduct = new Product('Laptop', 1200, 50);

// Crear un prototype de ese producto
const prototype = new ProductPrototype(originalProduct);

// Clonar el producto base
const clonedProduct = prototype.clone();

// Mostrar detalles del producto original y clonado
console.log('Producto Original:');
originalProduct.showDetails();

console.log('\nProducto Clonado:');
clonedProduct.showDetails();

// Modificar el producto clonado y mostrar detalles
clonedProduct.price = 1000;
clonedProduct.quantity = 60;

console.log('\nProducto Clonado Modificado:');
clonedProduct.showDetails();
