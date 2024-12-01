// FurnitureFactory.js
const ModernChair = require('./ModernChair');
const ModernTable = require('./ModernTable');
const ClassicChair = require('./ClassicChair');
const ClassicTable = require('./ClassicTable');

/**
 * Fábrica abstracta que define las interfaces para la creación de muebles.
 */
class FurnitureFactory {
  createChair() {
    throw new Error('Este método debe ser implementado en las subclases');
  }

  createTable() {
    throw new Error('Este método debe ser implementado en las subclases');
  }
}

/**
 * Fábrica concreta para muebles modernos.
 */
class ModernFurnitureFactory extends FurnitureFactory {
  createChair() {
    return new ModernChair();
  }

  createTable() {
    return new ModernTable();
  }
}

/**
 * Fábrica concreta para muebles clásicos.
 */
class ClassicFurnitureFactory extends FurnitureFactory {
  createChair() {
    return new ClassicChair();
  }

  createTable() {
    return new ClassicTable();
  }
}

module.exports = { ModernFurnitureFactory, ClassicFurnitureFactory };
