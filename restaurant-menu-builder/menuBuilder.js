// menuBuilder.js
const Menu = require('./menu');

// Builder de Menú
class MenuBuilder {
  constructor() {
    this.menu = new Menu(); // Iniciar un nuevo objeto Menu
  }

  // Métodos para agregar secciones al menú
  addEntrees(entrees) {
    entrees.forEach(entree => this.menu.addEntree(entree));
    return this; // Permite encadenar métodos
  }

  setMainDish(dish) {
    this.menu.setMainDish(dish);
    return this; // Permite encadenar métodos
  }

  addDesserts(desserts) {
    desserts.forEach(dessert => this.menu.addDessert(dessert));
    return this; // Permite encadenar métodos
  }

  addDrinks(drinks) {
    drinks.forEach(drink => this.menu.addDrink(drink));
    return this; // Permite encadenar métodos
  }

  // Método para construir el menú
  build() {
    return this.menu;
  }
}

module.exports = MenuBuilder;
