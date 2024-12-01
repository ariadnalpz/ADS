// Selling.js
const State = require('./State');

class Selling extends State {
  insertMoney(vendingMachine) {
    console.log("Dispensando bebida, por favor espera.");
  }

  selectBeverage(vendingMachine) {
    console.log("Bebida ya dispensada.");
  }

  dispense(vendingMachine) {
    console.log("Bebida dispensada con éxito.");
    vendingMachine.setState(vendingMachine.waitingForMoneyState);
  }
}

module.exports = Selling;
