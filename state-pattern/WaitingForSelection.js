// WaitingForSelection.js
const State = require('./State');

class WaitingForSelection extends State {
  insertMoney(vendingMachine) {
    console.log("Ya insertaste dinero. Ahora selecciona una bebida.");
  }

  selectBeverage(vendingMachine) {
    console.log("Bebida seleccionada. Dispensa la bebida...");
    vendingMachine.setState(vendingMachine.sellingState);
  }

  dispense() {
    console.log("Selecciona una bebida primero.");
  }
}

module.exports = WaitingForSelection;
