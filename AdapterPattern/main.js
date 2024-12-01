// main.js
const EmployeeSystem = require('./EmployeeSystem');
const EmployeeArraySystem = require('./EmployeeArraySystem');
const EmployeeAdapter = require('./EmployeeAdapter');

// Crear el sistema que maneja objetos de empleado
const employeeSystem = new EmployeeSystem();

// Crear el sistema que devuelve un array
const employeeArraySystem = new EmployeeArraySystem();

// Crear el adaptador para convertir el array en objetos Employee
const adapter = new EmployeeAdapter(employeeArraySystem);

// Usar el adaptador para convertir los empleados del array a objetos
const adaptedEmployees = adapter.getEmployees();

// Agregar los empleados convertidos al sistema original
adaptedEmployees.forEach((employee) => {
  employeeSystem.addEmployee(employee);
});

// Mostrar los empleados en el sistema original
employeeSystem.displayEmployees();
