// WaitingForMoney.js
const State = require('./State');

class WaitingForMoney extends State {
  insertMoney(vendingMachine) {
    console.log("Dinero insertado. Ahora seleccione una bebida.");
    vendingMachine.setState(vendingMachine.waitingForSelectionState);
  }

  selectBeverage() {
    console.log("Debe insertar dinero primero.");
  }

  dispense() {
    console.log("Debe insertar dinero primero.");
  }
}

module.exports = WaitingForMoney;
