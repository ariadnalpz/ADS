// Logger.js
class Logger {
    // Guardamos la instancia única de la clase
    static instance = null;
  
    // Constructor privado (no se puede instanciar desde afuera)
    constructor() {
      if (Logger.instance) {
        return Logger.instance; // Si ya existe una instancia, la retornamos
      }
  
      // Si no existe, inicializamos la instancia
      this.logs = [];
      Logger.instance = this; // Asignamos la instancia
    }
  
    // Método para agregar un log
    log(message) {
      const timestamp = new Date().toISOString();
      this.logs.push(`[${timestamp}] ${message}`);
      console.log(`[${timestamp}] ${message}`);
    }
  
    // Método para obtener todos los logs
    getLogs() {
      return this.logs;
    }
  }
  
  module.exports = Logger;
  