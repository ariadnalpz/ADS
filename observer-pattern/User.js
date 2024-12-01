// User.js
class User {
    constructor(name) {
      this.name = name; // Nombre del usuario
    }
  
    // Método que se llama cuando el clima cambia
    update(weatherCondition) {
      console.log(`${this.name} ha recibido la actualización del clima: ${weatherCondition}`);
    }
  }
  
  module.exports = User;
  