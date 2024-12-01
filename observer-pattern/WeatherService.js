// WeatherService.js
class WeatherService {
    constructor() {
      this.observers = []; // Lista de observadores
      this.weatherCondition = ''; // Estado de la condición del clima
    }
  
    // Método para suscribir un observador
    subscribe(observer) {
      this.observers.push(observer);
      console.log(`Nuevo observador suscrito.`);
    }
  
    // Método para desuscribir un observador
    unsubscribe(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
      console.log(`Observador desuscrito.`);
    }
  
    // Método para notificar a todos los observadores
    notify() {
      this.observers.forEach(observer => observer.update(this.weatherCondition));
    }
  
    // Método para cambiar el estado del clima
    setWeatherCondition(condition) {
      console.log(`El clima ha cambiado a: ${condition}`);
      this.weatherCondition = condition;
      this.notify(); // Notifica a los observadores sobre el cambio
    }
  }
  
  module.exports = WeatherService;
  