// menu.js
class Menu {
    constructor() {
      this.entrees = [];
      this.mainDish = '';
      this.desserts = [];
      this.drinks = [];
    }
  
    // Métodos para agregar secciones al menú
    addEntree(entree) {
      this.entrees.push(entree);
    }
  
    setMainDish(dish) {
      this.mainDish = dish;
    }
  
    addDessert(dessert) {
      this.desserts.push(dessert);
    }
  
    addDrink(drink) {
      this.drinks.push(drink);
    }
  
    // Mostrar el menú
    showMenu() {
      console.log('--- Menú ---');
      console.log('Entradas:', this.entrees.join(', '));
      console.log('Plato Principal:', this.mainDish);
      console.log('Postres:', this.desserts.join(', '));
      console.log('Bebidas:', this.drinks.join(', '));
    }
  }
  
  module.exports = Menu;
  