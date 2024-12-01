// SunroofDecorator.js
const Car = require('./Car');

class SunroofDecorator extends Car {
  constructor(car) {
    super();
    this.car = car;  // El coche original al que se le agregará el decorador
  }

  getDescription() {
    return `${this.car.getDescription()}, con techo corredizo`;
  }

  cost() {
    return this.car.cost() + 2500; // Aumenta el costo del coche por el sunroof
  }
}

module.exports = SunroofDecorator;
