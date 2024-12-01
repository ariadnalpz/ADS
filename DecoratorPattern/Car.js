// Car.js
class Car {
    constructor() {
      this.description = "Carro Básico";
    }
  
    getDescription() {
      return this.description;
    }
  
    cost() {
      return 20000; // Precio base del coche
    }
  }
  
  module.exports = Car;
  