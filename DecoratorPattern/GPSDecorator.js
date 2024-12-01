// GPSDecorator.js
const Car = require('./Car');

class GPSDecorator extends Car {
  constructor(car) {
    super();
    this.car = car;  // El coche original al que se le agregará el decorador
  }

  getDescription() {
    return `${this.car.getDescription()}, y navegación GPS`;
  }

  cost() {
    return this.car.cost() + 1500; // Aumenta el costo del coche por el GPS
  }
}

module.exports = GPSDecorator;
