// product.js
class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    // Método para mostrar los detalles del producto
    showDetails() {
      console.log(`Producto: ${this.name}`);
      console.log(`Precio: $${this.price}`);
      console.log(`Cantidad en inventario: ${this.quantity}`);
    }
  
    // Método para clonar el producto
    clone() {
      return new Product(this.name, this.price, this.quantity);
    }
  }
  
  module.exports = Product;
  