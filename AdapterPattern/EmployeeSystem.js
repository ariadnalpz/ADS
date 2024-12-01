// EmployeeSystem.js
class EmployeeSystem {
    constructor() {
      this.employees = [];
    }
  
    // Método para añadir un empleado
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    // Método para mostrar los empleados
    displayEmployees() {
      console.log("Lista de Empleados:");
      this.employees.forEach((employee) => {
        console.log(`${employee.getName()} - ${employee.getPosition()}`);
      });
    }
  }
  
  module.exports = EmployeeSystem;
  