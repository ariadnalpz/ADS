// SMSNotification.js
const Notification = require('./Notification');

/**
 * Clase concreta para enviar notificaciones por SMS.
 */
class SMSNotification extends Notification {
  send(message) {
    console.log(`📱 Enviando SMS con mensaje: ${message}`);
  }
}

module.exports = SMSNotification;
