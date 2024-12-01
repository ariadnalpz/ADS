// PaymentProcessor.js
class PaymentProcessor {
    // Método plantilla que define el flujo general de procesamiento del pago
    processPayment(amount) {
      this.validatePaymentDetails(amount);
      this.processTransaction(amount);
      this.sendConfirmation(amount);
    }
  
    // Métodos a ser implementados por las subclases
    validatePaymentDetails(amount) {
      throw new Error("Método 'validatePaymentDetails' debe ser implementado.");
    }
  
    processTransaction(amount) {
      throw new Error("Método 'processTransaction' debe ser implementado.");
    }
  
    sendConfirmation(amount) {
      throw new Error("Método 'sendConfirmation' debe ser implementado.");
    }
  }
  
  module.exports = PaymentProcessor;
  