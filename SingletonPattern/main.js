// main.js
const Logger = require('./Logger');

// Intentamos crear varias instancias de Logger
const logger1 = new Logger();
const logger2 = new Logger();

// Verificamos si ambas instancias son la misma
console.log(logger1 === logger2); // Debería ser 'true', ya que es una instancia única

// Usamos el logger para escribir algunos logs
logger1.log('Aplicación iniciada');
logger2.log('Cargando datos');

// Imprimimos todos los logs
console.log('Logs:', logger2.getLogs());
