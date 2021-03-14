const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

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
    }).then(answer => {
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
        } else if (answer.action === 'Exit') {
            connection.end();
            console.log("Have a good day.");
        }
    })
}
//   * Add departments, roles, employees
function addDepartments() {
    let query = `SELECT * FROM department`
    connection.query(query, (err, res) => {
        inquirer.prompt({
            name: "department",
            type: "input",
            message: "Enter name for new department"
        }).then(answer => {
            var query = "INSERT INTO department (name) VALUES (?)";
            connection.query(query, answer.department, (err, res) => {
                if (err) throw err
                console.log(`You have added this department: ${answer.department}.`)
            })
            viewDepartments();
        })
    })
}
function addRoles() {
    let query = `SELECT * FROM role`;
    connection.query(query, (err, res) => {
        if (err) throw err
        inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "Please enter title of new role"
            }, {
                type: "input",
                name: "salary",
                message: "Please enter salary for new role"
            }, {
                type: "input",
                name: "departmentID",
                message: "Please enter department id for new role"
            }
        ]).then(answers => {
            let query = `INSERT INTO role VALUES (?,?,?)`;
            connection.query(query, [answers.title, answers.salary, answer.departmentID], function (err) {
                if (err) throw err;
                console.log(`${answers.role} added as new role`);
                viewRoles();
            })
        })
    })
}
function addEmployees() {
    let query = `SELECT * FROM employee`
    connection.query(query, (err, results) => {
        if (err) throw err;
        inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "Enter employee first name"
            }, {
                type: "input",
                name: "last_name",
                message: "Enter employee last name"
            }, {
                type: "list",
                name: "role",
                message: "Please select employee title",
                choices: results.map(role => {
                    return { name: role.title, value: role.role_id }
                })
            }, {
                type: "input",
                name: "manager",
                message: "Please enter employee manager id"
            }])
            .then(answer => {
                console.log(answer);
                connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
                    [answer.first_name, answer.last_name, answer.role, answer.manager], (err) => {
                        if (err) throw err
                        console.log(`New employee: ${answer.first_name} ${answer.last_name}`)
                        viewEmployees();
                    })
            })
    })

}
//     * View departments, roles, employees
function viewDepartments() {
    let departmints = "SELECT * FROM department";
    connection.query(departmints, (err, res) => {
        if (err) throw err;
        console.log(`Departmints:`);
        console.table(res);
        askFirstQuestions();
    })
}
function viewRoles() {
    let departmints = "SELECT * FROM role";
    connection.query(departmints, (err, res) => {
        if (err) throw err;
        console.log(`Roles: `);
        console.table(res);
        askFirstQuestions();
    })
}
function viewEmployees() {
    let departmints = "SELECT * FROM employee";
    connection.query(departmints, (err, res) => {
        if (err) throw err;
        console.log(`Employees: `);
        console.table(res);
        askFirstQuestions();
    })
}
//         * Update employee roles
function updateEmployeeRoles() {

    askFirstQuestions();
}
//     * Update employee managers
function updateEmployeeManager() {

    askFirstQuestions();
}
//         * View employees by manager
function viewEmployeesByManager() {

    askFirstQuestions();
}
//             * Delete departments, roles, and employees
function deleteDepartments() {

    askFirstQuestions();
}

function deleteRoles() {

    askFirstQuestions();
}

function deleteEmployees() {

    askFirstQuestions();
}
// * View the total utilized budget of a department-- ie the combined salaries of all employees in that department
function viewTheTotalUtilizedBudgetOfADepartment() {

    askFirstQuestions();
}
