// OutOfService.js
const State = require('./State');

class OutOfService extends State {
  insertMoney() {
    console.log("La máquina está fuera de servicio.");
  }

  selectBeverage() {
    console.log("La máquina está fuera de servicio.");
  }

  dispense() {
    console.log("La máquina está fuera de servicio.");
  }
}

module.exports = OutOfService;
