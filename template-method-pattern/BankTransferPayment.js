// BankTransferPayment.js
const PaymentProcessor = require('./PaymentProcessor');

class BankTransferPayment extends PaymentProcessor {
  validatePaymentDetails(amount) {
    console.log(`Validando transferencia bancaria para el monto: $${amount}`);
  }

  processTransaction(amount) {
    console.log(`Procesando transferencia bancaria de $${amount}`);
  }

  sendConfirmation(amount) {
    console.log(`Enviando confirmación de pago por transferencia bancaria de $${amount}`);
  }
}

module.exports = BankTransferPayment;
