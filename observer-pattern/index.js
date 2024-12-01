// index.js
const WeatherService = require('./WeatherService');
const User = require('./User');

// Creamos el servicio de clima (sujeto)
const weatherService = new WeatherService();

// Creamos algunos usuarios (observadores)
const user1 = new User("Ariadna");
const user2 = new User("Leonardo");
const user3 = new User("Esau");

// Los usuarios se suscriben al servicio de clima
weatherService.subscribe(user1);
weatherService.subscribe(user2);
weatherService.subscribe(user3);

// Cambiamos el estado del clima y notificamos a los usuarios
weatherService.setWeatherCondition("Soleado");

// Ahora, desuscribimos a un usuario
weatherService.unsubscribe(user2);

// Cambiamos nuevamente el estado del clima
weatherService.setWeatherCondition("Lluvia");
