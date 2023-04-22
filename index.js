const db = require('./db/connection');
const inquirer = require('inquirer');


// * ========================== MAIN PROMPT ================================= * //

function mainMenu() {
  inquirer.prompt({
    type: 'list',
    name: 'menuChoice',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update employee role',
      'EXIT'
    ]
  }).then(({ menuChoice }) => {
    if (menuChoice === 'View all departments') {
      getDepartments();
    }
    if (menuChoice === 'View all roles') {
      getRoles();
    }
    if (menuChoice === 'View all employees') {
      getEmployees();
    }
    if (menuChoice === 'Update employee role') {
      updateRole();
    }
    if (menuChoice === 'Add an employee') {
      addEmployee();
    }
    if (menuChoice === 'Add a role') {
      addRole();
    }
    if (menuChoice === 'Add a department') {
      addDepartment();
    }
    if (menuChoice === 'EXIT') {
      console.log('Make sure your employees feel appreciated! ByeBye for now!');
      db.end();
    }
  })
}


// * ================ CALLS MAIN PROMPT ON START ============ * //

function init() {
  mainMenu();
};


// * =========================== VIEW ALL ============================ * //

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
  db.query('SELECT roles.*, departments.name AS department FROM roles JOIN departments ON roles.department_id = departments.id', (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    mainMenu();
  });
};

function getEmployees() {

  db.query('SELECT employees.id AS Employee_ID, employees.first_name, employees.last_name, manager_id AS manager, roles.title AS job_title, departments.name AS department, roles.salary AS salary FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id', (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    mainMenu();

  });
}




// * =========================== ADD TO TABLES ========================= * //

// * Add EMPLOYEE
function addEmployee() {

  db.query('SELECT * FROM roles', (err, res) => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'addFirstName',
        message: 'What is the employee\'s first name?',
        validate: (addFirstName) => {
          if (!addFirstName) {
            return 'First name is Required';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'addLastName',
        message: 'What is the employee\'s last name?',
        validate: (addLastName) => {
          if (!addLastName) {
            return 'Last name is Required';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'addEmpRole',
        message: 'What is the new Employees Role?',
        choices: () => {
          const roleList = [];
          res.forEach((role) => {
            const name = role.title;
            const value = role.id;
            roleList.push({ name, value })
          })
          return roleList;
        }
      },
      {
        type: 'input',
        name: 'addEmpMngr',
        message: 'What is the employee ID of the manager you would like to oversee this new employee? (If NULL, press \'enter\' to skip)'
      }
    ])
      .then(({ addFirstName, addLastName, addEmpRole, addEmpMngr }) => {
        res.map(rolesData => {
          let roleId = rolesData.id;

          if (roleId === addEmpRole) {
            db.query('INSERT INTO employees SET ?',
              ({
                first_name: addFirstName,
                last_name: addLastName,
                role_id: roleId,
                manager_id: addEmpMngr
              }),
              console.log('Fresh Meat Added to Employee Roster ;)')
            )
          }
        })
      })
      .then(() => {
        console.log('Updated Employee List');
        getEmployees();
      })
  })
};


// * ======== ADD ROLE ======== * // 

function addRole() {
  db.query('SELECT * FROM departments', (err, res) => {

    inquirer.prompt([
      {
        type: 'input',
        name: 'addTitle',
        message: 'What is the title of the job role you\'d like to add?',
        validate: (addTitle) => {
          if (!addTitle) {
            return 'A title of the role is Required';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'addSalary',
        message: 'Enter salary of this new role. Numbers only, please exclude any special characters',
        validate: (addSalary) => {
          if (isNaN(addSalary)) {
            return 'Please enter the full number, excluding special characters!';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'addRoleDept',
        message: 'Which Department does this role fall under?',
        choices: () => {
          const deptList = [];
          res.forEach((dept) => {
            const name = dept.name;
            const value = dept.id;
            deptList.push({ name, value })
          })
          return deptList;
        }
      }
    ])
      .then(({ addTitle, addSalary, addRoleDept }) => {
        res.map(deptData => {
          console.log(deptData);
          console.log(addRoleDept);
          let deptId = deptData.id;
          if (deptId === addRoleDept) {
            console.log(deptId);
            db.query('INSERT INTO roles SET ?',
              ({
                title: addTitle,
                salary: addSalary,
                department_id: deptId
              }),
              console.log('Fresh Role hawt out the oven ;)')
            )
          }
        })
        console.log('Updated Roles List');
        getRoles();
      })
  })
};


function addDepartment() {
  db.query('SELECT * FROM departments', (err, res) => {

    inquirer.prompt([
      {
        type: 'input',
        name: 'addDept',
        message: 'What is the name of the department you\'d like to add?',
        validate: (addDept) => {
          if (!addDept) {
            return 'Input Required';
          }
          return true;
        }
      }
    ])
      .then(({ addDept }) => {
        db.query('INSERT INTO departments SET ?',
          {
            name: addDept
          },
          console.log('Fresh Depot ;)')
        )
        console.log('Updated Departments List');
        getDepartments();
      });
  })
};


// * ==================== UPDATE EMPLOYEE ROLE ========================= * //

function updateRole() {
  db.query('SELECT employees.id, employees.first_name, employees.last_name FROM employees', (err, res) => {

    // * WHICH EMPLOYEE prompt to UPDATE ROLE
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
      // * WHICH ROLE prompt to UPDATE
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
                })
                return roleList;
              }
            }
          ])
            // * inner sql UPDATE EMPLOYEE by ID WHERE ROLE_ID
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
                  });
                };
              };
              console.log('Here is the updated Employees Table');
              getEmployees();
            });
        });
      });
  });
}



init();