// index.js
const VendingMachine = require('./VendingMachine');

// Creamos una instancia de la máquina expendedora
const vendingMachine = new VendingMachine();

// Simulamos las interacciones de un usuario con la máquina
console.log("Usuario 1: ");
vendingMachine.insertMoney(); // Esperando dinero
vendingMachine.selectBeverage(); // Seleccionando bebida
vendingMachine.dispense(); // Vendiendo bebida

console.log("\nUsuario 2: ");
vendingMachine.insertMoney(); // Esperando dinero
vendingMachine.selectBeverage(); // Selección de bebida
vendingMachine.insertMoney(); // Dinero ya insertado
vendingMachine.dispense(); // Vendiendo bebida
