// ClassicTable.js
const Table = require('./Table');

/**
 * Implementación de una mesa clásica.
 */
class ClassicTable extends Table {
  use() {
    console.log('🪑 Usas una mesa clásica de madera maciza con acabados detallados.');
  }
}

module.exports = ClassicTable;
