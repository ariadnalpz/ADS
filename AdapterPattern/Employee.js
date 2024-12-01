// Employee.js
class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  
    getName() {
      return this.name;
    }
  
    getPosition() {
      return this.position;
    }
  }
  
  module.exports = Employee;
  