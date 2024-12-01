// Document.js
class Document {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
  
    // Método para clonar el documento (el "prototype")
    clone() {
      return new Document(this.title, this.content);
    }
  
    // Método para mostrar el contenido del documento
    show() {
      console.log(`Title: ${this.title}`);
      console.log(`Content: ${this.content}`);
    }
  }
  
  module.exports = Document;
  