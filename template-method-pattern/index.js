// index.js
const CreditCardPayment = require('./CreditCardPayment');
const PayPalPayment = require('./PayPalPayment');
const BankTransferPayment = require('./BankTransferPayment');

// Crear una instancia de pago con tarjeta de crédito
const creditCardPayment = new CreditCardPayment();
console.log("Procesando pago con tarjeta de crédito:");
creditCardPayment.processPayment(100);

// Crear una instancia de pago con PayPal
const payPalPayment = new PayPalPayment();
console.log("\nProcesando pago con PayPal:");
payPalPayment.processPayment(200);

// Crear una instancia de pago por transferencia bancaria
const bankTransferPayment = new BankTransferPayment();
console.log("\nProcesando pago por transferencia bancaria:");
bankTransferPayment.processPayment(300);
