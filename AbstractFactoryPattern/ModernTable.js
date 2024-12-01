// ModernTable.js
const Table = require('./Table');

/**
 * Implementación de una mesa moderna.
 */
class ModernTable extends Table {
  use() {
    console.log('🪑 Usas una mesa moderna con superficies limpias y colores neutros.');
  }
}

module.exports = ModernTable;
