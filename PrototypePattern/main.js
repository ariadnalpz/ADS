// main.js
const Document = require('./Document');

// Crear un documento original (prototipo)
const originalDocument = new Document('Prototipo de Documento Patrones de diseño', 'Este es el contenido del documento original');

// Mostrar el contenido del documento original
console.log('Documento Original:');
originalDocument.show();

// Clonar el documento original y modificar su contenido
const clonedDocument1 = originalDocument.clone();
clonedDocument1.title = 'Documento Clonado 1';
clonedDocument1.content = 'Este es el contenido del primer documento clonado.';

// Clonar el documento original y modificar su contenido nuevamente
const clonedDocument2 = originalDocument.clone();
clonedDocument2.title = 'Documento Clonado 2';
clonedDocument2.content = 'Este es el contenido del segundo documento clonado.';

// Mostrar los documentos clonados
console.log('\nDocumentos Clonados:');
clonedDocument1.show();
clonedDocument2.show();
