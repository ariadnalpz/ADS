// PushNotification.js
const Notification = require('./Notification');

/**
 * Clase concreta para enviar notificaciones push.
 */
class PushNotification extends Notification {
  send(message) {
    console.log(`🔔 Enviando notificación Push con mensaje: ${message}`);
  }
}

module.exports = PushNotification;
