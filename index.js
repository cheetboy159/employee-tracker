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

function askFirstQuestions(){
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role",
            "Exit"
        ]
    }).then((answer)=>{
        console.log(answer);
    })
}

// * ** department **:

//   * ** id ** - INT PRIMARY KEY
//     * ** name ** - VARCHAR(30) to hold department name

//         * ** role **:

//   * ** id ** - INT PRIMARY KEY
//     * ** title ** -  VARCHAR(30) to hold role title
//         * ** salary ** -  DECIMAL to hold role salary
//             * ** department_id ** -  INT to hold reference to department role belongs to

//                 * ** employee **:

//   * ** id ** - INT PRIMARY KEY
//     * ** first_name ** - VARCHAR(30) to hold employee first name
//         * ** last_name ** - VARCHAR(30) to hold employee last name
//             * ** role_id ** - INT to hold reference to role employee has
//                 * ** manager_id ** - INT to hold reference to another employee that manages the employee being Created.This field may be null if the employee has no manager

// Build a command - line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//     * View departments, roles, employees

//         * Update employee roles

// Bonus points if you're able to:

//     * Update employee managers

//         * View employees by manager

//             * Delete departments, roles, and employees

//                 * View the total utilized budget of a department-- ie the combined salaries of all employees in that department