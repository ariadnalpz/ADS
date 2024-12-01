// index.js
const Calculator = require('./Calculator');
const PercentageDiscount = require('./PercentageDiscount');
const FixedDiscount = require('./FixedDiscount');
const BulkDiscount = require('./BulkDiscount');

// Crear una instancia de la calculadora con una estrategia de descuento
const calculator = new Calculator(new PercentageDiscount(10)); // 10% de descuento

let totalAmount = 1000;
console.log(`Precio inicial: $${totalAmount}`);
console.log(`Precio con descuento (10%): $${calculator.calculateTotalAmount(totalAmount)}`);

calculator.setDiscountStrategy(new FixedDiscount(100)); // Descuento fijo de $100
console.log(`Precio con descuento fijo de $100: $${calculator.calculateTotalAmount(totalAmount)}`);

calculator.setDiscountStrategy(new BulkDiscount(1500, 200)); // Descuento de $200 si la compra supera los $1500
totalAmount = 1600;
console.log(`Precio con descuento por volumen (más de $1500): $${calculator.calculateTotalAmount(totalAmount)}`);

totalAmount = 1400;
console.log(`Precio sin descuento por volumen (menos de $1500): $${calculator.calculateTotalAmount(totalAmount)}`);
