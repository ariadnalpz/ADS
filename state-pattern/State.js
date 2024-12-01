// State.js
class State {
    insertMoney(vendingMachine) {
      throw new Error("Método 'insertMoney' debe ser implementado.");
    }
  
    selectBeverage(vendingMachine) {
      throw new Error("Método 'selectBeverage' debe ser implementado.");
    }
  
    dispense(vendingMachine) {
      throw new Error("Método 'dispense' debe ser implementado.");
    }
  }
  
  module.exports = State;
  