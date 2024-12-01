// EmployeeArraySystem.js
class EmployeeArraySystem {
    constructor() {
      // Array de empleados, cada uno con nombre y posición
      this.employees = [
        ["Leonardo Montero", "Desarrollador"],
        ["Ariadna Lopez", "Diseñadora"],
        ["Esau Leyva", "Líder"],
      ];
    }
  
    // Método para obtener los empleados como array
    getEmployees() {
      return this.employees;
    }
  }
  
  module.exports = EmployeeArraySystem;
  