// Calculator.js
class Calculator {
    constructor(discountStrategy) {
      this.discountStrategy = discountStrategy; // Se asigna la estrategia de descuento
    }
  
    setDiscountStrategy(discountStrategy) {
      this.discountStrategy = discountStrategy; // Cambia la estrategia en tiempo de ejecución
    }
  
    calculateTotalAmount(totalAmount) {
      return this.discountStrategy.calculateDiscount(totalAmount);
    }
  }
  
  module.exports = Calculator;
  