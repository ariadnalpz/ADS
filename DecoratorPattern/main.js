// main.js
const Car = require('./Car');
const SunroofDecorator = require('./SunroofDecorator');
const GPSDecorator = require('./GPSDecorator');

// Crear un coche base
let myCar = new Car();
console.log(myCar.getDescription()); // "Basic car"
console.log("Costo: $" + myCar.cost());

// Agregar un sunroof
myCar = new SunroofDecorator(myCar);
console.log(myCar.getDescription()); // "Basic car, with a sunroof"
console.log("Costo: $" + myCar.cost());

// Agregar GPS
myCar = new GPSDecorator(myCar);
console.log(myCar.getDescription()); // "Basic car, with a sunroof, with GPS navigation"
console.log("Costo: $" + myCar.cost());
