// ModernChair.js
const Chair = require('./Chair');

/**
 * Implementación de una silla moderna.
 */
class ModernChair extends Chair {
  sit() {
    console.log('🪑 Te sientas en una silla moderna con un diseño minimalista.');
  }
}

module.exports = ModernChair;
