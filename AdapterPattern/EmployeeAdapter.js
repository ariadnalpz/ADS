// EmployeeAdapter.js
const Employee = require('./Employee');

// El adaptador toma el array de datos y lo adapta al sistema que espera un objeto
class EmployeeAdapter {
  constructor(employeeArraySystem) {
    this.employeeArraySystem = employeeArraySystem;
  }

  // Convierte cada array de datos en un objeto Employee
  getEmployees() {
    const employees = this.employeeArraySystem.getEmployees();
    return employees.map((data) => {
      // Asegúrate de que estamos creando una nueva instancia de Employee
      return new Employee(data[0], data[1]);
    });
  }
}

module.exports = EmployeeAdapter;
