// EmailNotification.js
const Notification = require('./Notification');

/**
 * Clase concreta para enviar notificaciones por email.
 */
class EmailNotification extends Notification {
  send(message) {
    console.log(`📧 Enviando email con mensaje: ${message}`);
  }
}

module.exports = EmailNotification;
