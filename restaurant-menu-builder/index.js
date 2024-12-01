// index.js
const MenuBuilder = require('./menuBuilder');

const builder = new MenuBuilder();

// Construir un menú para una cena especial
const specialDinnerMenu = builder
  .addEntrees(['Sopa de mariscos', 'Ensalada de pollo'])
  .setMainDish('Filete de res con puré de papas')
  .addDesserts(['Pastel de chocolate', 'Helado de vainilla'])
  .addDrinks(['Vino tinto', 'Agua mineral'])
  .build();

// Mostrar el menú
specialDinnerMenu.showMenu();
