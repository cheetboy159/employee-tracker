const inquirer = require("inquirer");
const mysql = require("mysql");

// connect to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    port: 3306,
    database: "employee_db"
});

connection.connect((err) => {
    if (err) throw err;
    askFirstQuestions();
});

function askFirstQuestions() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add departments",
            "Add roles",
            "Add employees",
            "View departments",
            "View roles",
            "View employees",
            "Update employee roles",
            "Update employee manager",
            "View employees by manager",
            "Delete departments",
            "Delete roles",
            "Delete employees",
            "View the total utilized budget of a department",
            "Exit"
        ]
    }).then((answer) => {
        // console.log(answer);
        if (answer.action === "Add departments") {
            addDepartments();
        } else if (answer.action === "Add roles") {
            addRoles();
        } else if (answer.action === "Add employees") {
            addEmployees();
        } else if (answer.action === "View departments") {
            viewDepartments();
        } else if (answer.action === "View roles") {
            viewRoles();
        } else if (answer.action === "View employees") {
            viewEmployees();
        } else if (answer.action === "Update employee roles") {
            updateEmployeeRoles();
        } else if (answer.action === "Update employee manager") {
            updateEmployeeManager();
        } else if (answer.action === "View employees by manager") {
            viewEmployeesByManager();
        } else if (answer.action === "Delete departments") {
            deleteDepartments();
        } else if (answer.action === "Delete roles") {
            deleteRoles();
        } else if (answer.action === "Delete employees") {
            deleteEmployees();
        } else if (answer.action === "View the total utilized budget of a department") {
            viewTheTotalUtilizedBudgetOfADepartment();
        }else if (answer.action === 'Exit') {
            connection.end();
            console.log("Have a good day.")
        }
    })
}

function addDepartments(){

}

function addRoles(){

}

function addEmployees(){

}

function viewDepartments(){

}

function viewRoles(){

}

function viewEmployees(){

}

function updateEmployeeRoles(){

}

function updateEmployeeManager(){

}

function viewEmployeesByManager(){

}

function deleteDepartments(){

}

function deleteRoles(){

}

function deleteEmployees(){

}

function viewTheTotalUtilizedBudgetOfADepartment(){

}

// Build a command - line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//     * View departments, roles, employees

//         * Update employee roles

// Bonus points if you're able to:

//     * Update employee managers

//         * View employees by manager

//             * Delete departments, roles, and employees

//                 * View the total utilized budget of a department-- ie the combined salaries of all employees in that department