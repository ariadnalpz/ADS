// CreditCardPayment.js
const PaymentProcessor = require('./PaymentProcessor');

class CreditCardPayment extends PaymentProcessor {
  validatePaymentDetails(amount) {
    console.log(`Validando tarjeta de crédito para el monto: $${amount}`);
  }

  processTransaction(amount) {
    console.log(`Procesando pago con tarjeta de crédito de $${amount}`);
  }

  sendConfirmation(amount) {
    console.log(`Enviando confirmación de pago con tarjeta de crédito por $${amount}`);
  }
}

module.exports = CreditCardPayment;
