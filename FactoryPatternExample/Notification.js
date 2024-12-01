// Notification.js (Superclase)
/**
 * Clase base para todas las notificaciones.
 */
class Notification {
    send(message) {
      throw new Error("El método 'send()' debe implementarse en subclases");
    }
  }
  
  module.exports = Notification;
  