const inquirer = require("inquirer");

// Create and initialize function to display logo when the function is executed
inquirer.prompt([{
    type:
    
}]


//develop a function that prompts the client with choices 
//question that should be prompted will ask the client what would they like to do
    //a list should be provided 
    //a minimum of 15 options 
    var initialPrompt = [
    {
        type: "input",
        name: "selection",
        message: "Let's Start",
        choices: [
            "Add Departments",
            "Add Roles",
            "Remove Employees",
            "View Departments",
            "View Roles",
            "View Employees",
            "Update Employee Roles",
            "Exit"
        ]
    }
];
async function getDepartments() {
    const data = await connection.query
        ("SELECT * FROM departments");
    return data;
};
async function getRoles() {
    const data = await connection.query
        ("SELECT * FROM roles")
    return data;
};
async function getEmployees() {
    const data = await connection.query
        ("SELECT * FROM employees")
    return data;
};
async function createDepartment(department) {
    const data = await connection.query
        ('INSERT INTO department (department_name) VALUES ("Sales"), ("Finance"), ("Developer"), ("Legal")');
    console.log(data)
};
function createRole(role) {
};
function createEmployee(employee) {
};
function updateEmployee(employee) {
};
var newItemPrompts = [
    {
        type: "input",
        name: "name",
        message: "Enter item name: "
    },
    {
        type: "input",
        name: "description",
        message: "Enter item description: "
    },
    {
        type: "input",
        name: "currentBid",
        message: "Enter starting bid: "
    }
];
var selectItemPrompt = [
    {
        type: "input",
        name: "id",
        message: "Enter ID of item you would like to bid on: "
    },
    {
        type: "input",
        name: "bid",
        message: "How much would you like to bid? "
    }
]
    //main();