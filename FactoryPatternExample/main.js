// main.js
const NotificationFactory = require('./NotificationFactory');

/**
 * Función principal para probar el Patrón Factory.
 */
function main() {
  try {
    // Crear una notificación de tipo email
    const emailNotification = NotificationFactory.createNotification('email');
    emailNotification.send('Hola, este es un mensaje por correo electrónico.');

    // Crear una notificación de tipo SMS
    const smsNotification = NotificationFactory.createNotification('sms');
    smsNotification.send('Hola, este es un mensaje por SMS.');

    // Crear una notificación de tipo Push
    const pushNotification = NotificationFactory.createNotification('push');
    pushNotification.send('Hola, este es un mensaje por notificación Push.');

    // Intentar crear un tipo no soportado
    const unsupportedNotification = NotificationFactory.createNotification('fax');
    unsupportedNotification.send('Este mensaje no debería enviarse.');
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

// Ejecutar la función principal
main();
