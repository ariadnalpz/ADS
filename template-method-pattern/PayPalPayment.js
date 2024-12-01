// PayPalPayment.js
const PaymentProcessor = require('./PaymentProcessor');

class PayPalPayment extends PaymentProcessor {
  validatePaymentDetails(amount) {
    console.log(`Validando cuenta de PayPal para el monto: $${amount}`);
  }

  processTransaction(amount) {
    console.log(`Procesando pago con PayPal de $${amount}`);
  }

  sendConfirmation(amount) {
    console.log(`Enviando confirmación de pago con PayPal por $${amount}`);
  }
}

module.exports = PayPalPayment;
