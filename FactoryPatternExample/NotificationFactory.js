// NotificationFactory.js
const EmailNotification = require('./EmailNotification');
const SMSNotification = require('./SMSNotification');
const PushNotification = require('./PushNotification');

/**
 * Clase Factory para crear notificaciones.
 */
class NotificationFactory {
  /**
   * Método estático que crea el tipo de notificación según la entrada.
   * @param {string} type - El tipo de notificación (email, sms, push).
   * @returns {Notification} Instancia del tipo de notificación.
   */
  static createNotification(type) {
    switch (type) {
      case 'email':
        return new EmailNotification();
      case 'sms':
        return new SMSNotification();
      case 'push':
        return new PushNotification();
      default:
        throw new Error(`Tipo de notificación no soportado: ${type}`);
    }
  }
}

module.exports = NotificationFactory;
