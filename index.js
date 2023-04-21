
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

function updateRole() {
  db.query('SELECT employees.id, employees.first_name, employees.last_name FROM employees', (err, res) => {

    inquirer.prompt([
      {
        type: 'list',
        name: 'selectEmployee',
        message: 'Select Employee to Update',
        choices: () => {
          const employeeList = [];
          res.forEach((employee) => {
            const name = (employee.first_name + ' ' + employee.last_name);
            const value = employee.id;
            employeeList.push({ name, value });
          })
          return employeeList;
        }
      }
    ])
      .then((choiceEmployee) => {
        db.query('SELECT roles.id, roles.title FROM roles', (err, rolesRes) => {

          inquirer.prompt([
            {
              type: 'list',
              name: 'selectRole',
              message: 'What would you like to change their role to?',
              choices: () => {
                const roleList = [];
                rolesRes.forEach((role) => {
                  const name = role.title;
                  const value = role.id;
                  roleList.push({ name, value })
                  // console.log(`DIS DA ROLE DATA RETURNED APPPAAAARRREEEENNTTLYYY: `, role);
                })
                // console.log(`rooolll  LEEEEEEST: `, roleList);
                return roleList;
              }
            }
          ])
            .then((choiceRole) => {
              for (let i = 0; i < rolesRes.length; i++) {
                if (choiceRole.selectRole === (rolesRes[i].id)) {
                  const sql = 'UPDATE employees SET ? WHERE ?';
                  const params = [({ role_id: choiceRole.selectRole }), ({ id: choiceEmployee.selectEmployee })];
                  db.query(sql, params, (err, row) => {
                    if (err) {
                      console.log(err);
                      return;
                    }
                    console.log('Employee role updated :)');

                  })
                }
              }
              const sql = 'SELECT * FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id';
              //   const params = [choiceEmployee.id];
              db.query(sql, (err, resUpdated) => {
                if(err){
                  console.log(err);
                }
                console.log({ message: 'Here is the updated Employees Table' });
                console.table(resUpdated);
                mainMenu();
                })
              })
            })
        })
      })
  }




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