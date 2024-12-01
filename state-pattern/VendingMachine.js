// VendingMachine.js
const WaitingForMoney = require('./WaitingForMoney');
const WaitingForSelection = require('./WaitingForSelection');
const Selling = require('./Selling');
const OutOfService = require('./OutOfService');

class VendingMachine {
  constructor() {
    this.waitingForMoneyState = new WaitingForMoney();
    this.waitingForSelectionState = new WaitingForSelection();
    this.sellingState = new Selling();
    this.outOfServiceState = new OutOfService();

    // Inicializamos el estado actual en "Esperando dinero"
    this.currentState = this.waitingForMoneyState;
  }

  // Cambiar el estado de la máquina
  setState(state) {
    this.currentState = state;
  }

  // Métodos de la máquina expendedora
  insertMoney() {
    this.currentState.insertMoney(this);
  }

  selectBeverage() {
    this.currentState.selectBeverage(this);
  }

  dispense() {
    this.currentState.dispense(this);
  }
}

module.exports = VendingMachine;
