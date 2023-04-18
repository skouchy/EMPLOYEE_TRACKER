
const db = require('./db/connection');
const inquirer = require('inquirer');
// const mysql = require('mysql2');
// const mysql = require('dotenv').config();
// const console = require('console.table');

function mainMenu() {
  inquirer.prompt({
    type: 'list',
    name: 'firstChoice',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update employee role',
      'Exit'
    ]
  }).then(({ firstChoice }) => {
    if (firstChoice === 'View all departments') {
      getDepartments();
    }
    if (firstChoice === 'View all roles') {
      getRoles();
    }
    if (firstChoice === 'View all employees') {
      getEmployees();
    }
    if (firstChoice === 'Update employee role') {
      updateRole();
    }
    

  }
  )

}

function init() {
  mainMenu();
};

function getDepartments() {
  db.query('SELECT * FROM departments', (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    mainMenu();
  })
};

function getRoles() {
  db.query('SELECT * FROM roles', (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    mainMenu();
  });
};

function getEmployees() {
  db.query('SELECT * FROM employees', (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    mainMenu();
  })
};


// db.get('/employees', (req, res) => {
// const sql = `SELECT * FROM employees;`;
//   const sql = `SELECT employees.*, roles.title AS job_title
// FROM employees
// JOIN roles ON employees.role_id = roles.id`;

//   const mgrName = `SELECT employees.*,
// manager_id AS manager_name
// CONCAT('first_name', ' ', 'last_name') INTO manager_id
// FROM employees
// WHERE 'id' = manager_id`;



// 
// // return res.json({
// //   message: 'All Employees Displayed!',
// //   data: rows
// // });
// console.table(res);


//     if (firstPrompt === 'View all departments') {
//       allDepartments();
//   }
//   if (firstPrompt === 'View all roles') {
//       allRoles();
//   }
//   if (firstPrompt === 'View all employees') {
//       allEmployees();
//   }
//   if (firstPrompt === 'Add a department') {
//       addDepartment();
//   }
//   if (firstPrompt === 'Add a role') {
//       addRole();
//   }
//   if (firstPrompt === 'Add an employee') {
//       addEmployee();
//   }
//   if (firstPrompt === 'Update employee role') {
//       updateRole();
//   }
//   if (firstPrompt === 'Exit') {
//       db.end();
//   }
// };


init();



// function init(choices) => {
//     prompt.inquirer(
//         type: listenerCount,
//         name: 
//     )

// }
// )