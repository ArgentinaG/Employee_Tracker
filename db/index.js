// Allows for specefic interactions (i.e addEmployees, queryManagers, etc) directly with your database
var connection = require("./connection");

class Employees {
    //Set each up like a method
    //reference the connection file so it can be reused 
    // Establish connection in a reusable method
    connector(connection) {
        this.connection = connection;
    }
    //finds all employee from your database 
    // method that queries employees from the employee, role, and department table (needs to be concatenated)

    findAllEmployee() {
        return this.connection.query(
            "SELECT employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, department.department_name"

        );
    }
    //find all managers - utilize the employee id 
    // Query from the employee table list of employee that don't have a specific id
    findAllManager(employeeId) {
        return this.connection.query(
            //Select the id , last_name, first_name from the employee table 
            //then include WHERE and the should be        id != ?
            "SELECT id, last_name, first_name FROM employee WHERE id !=?", employeeId

        );
    }
    //create employees
    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee a SET ?", employee);

    }
    //remove employees
    removeEmployee(employeeId) {
        return this.connection.query("DELETE FROM employee WHERE id =?", employeeId);
    }
    //update the employee role
    updateEmployee(employeeID, managerId) {
        return this.connection.query("UPDATE employee SET manager_id =? WHERE =id?", [employeeID, managerId])

    }
    //update the employee manager 

    //find all roles in the database 

    //create role 

    //remove role

    //find all departments 

    //create a department 

    //remove department

    //find all employess based on department 

    //find al managers by department 
}

//export your class  