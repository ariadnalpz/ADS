// productPrototype.js
const Product = require('./product');

// Prototype de Producto
class ProductPrototype {
  constructor(product) {
    this.product = product; // Producto que vamos a clonar
  }

  // Método para clonar el producto
  clone() {
    return this.product.clone(); // Llamamos al método clone del producto base
  }
}

module.exports = ProductPrototype;
