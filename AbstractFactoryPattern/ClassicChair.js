// ClassicChair.js
const Chair = require('./Chair');

/**
 * Implementación de una silla clásica.
 */
class ClassicChair extends Chair {
  sit() {
    console.log('🪑 Te sientas en una silla clásica de madera con detalles ornamentales.');
  }
}

module.exports = ClassicChair;
