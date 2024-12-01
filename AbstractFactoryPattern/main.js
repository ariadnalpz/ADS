// main.js
const { ModernFurnitureFactory, ClassicFurnitureFactory } = require('./FurnitureFactory');

/**
 * Función principal que usa las fábricas abstractas.
 */
function main() {
  // Crear muebles modernos
  const modernFactory = new ModernFurnitureFactory();
  const modernChair = modernFactory.createChair();
  const modernTable = modernFactory.createTable();
  modernChair.sit();
  modernTable.use();

  // Crear muebles clásicos
  const classicFactory = new ClassicFurnitureFactory();
  const classicChair = classicFactory.createChair();
  const classicTable = classicFactory.createTable();
  classicChair.sit();
  classicTable.use();
}

// Ejecutar la función principal
main();
