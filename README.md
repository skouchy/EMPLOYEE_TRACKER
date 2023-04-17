
# BACKEND FIRST =============== get data working ----------------

THEN I am presented with the following options: 
 <!-- TODO:  CREATE prepared statements for each GET, then test, then insert statement into schema -->
 <!--  get all departments,  GET -->
 <!--  get one department,  GET -->

 <!--  get all roles,   GET-->
 <!--  get one role,   GET-->

 <!-- *?* get all employees,   GET-->
 <!-- *?* get one employee,   GET-->

 <!-- TODO:  CREATE prepared statements for each CREATE, then test, then insert statement into schema -->
 <!-- ? add a department,  --> POST
 <!-- ? add a role,  --> POST
 <!-- ? add an employee,  --> POST
 
 <!-- TODO:  CREATE prepared statements for each UPDATE, then test, then insert statement into schema -->
 <!-- ! and update an employee role --> PUT




# WHEN I start the application ---------------------------
 <!-- TODO:  Inquirer Prompts -->
 <!--@ What would you like to do? -->
 View All departments
 View All roles
 View All employees
 -----------------
 Add a department
 Add a role
 Add an employee
 -----------------
 Update an employee role


# GET -------------------------

WHEN I choose to view all departments
 <!-- TODO:  Inquirer Function to call working router.get(API/departments)  -->

THEN I am presented with a formatted table showing 
<!-- *?* department names -->
<!-- *?* department ids -->



WHEN I choose to view all roles
 <!-- TODO:  Inquirer Function to call working router.get(API/roles)  -->
THEN I am presented with the 
<!-- *** job title,  -->
<!-- *** role id,  -->
<!-- *** the department that role belongs to--><!-- * REFERENCE department_id -->
<!-- *** the salary for that role -->



WHEN I choose to view all employees
 <!-- TODO:  Inquirer Function to call working router.get(API/employees)  -->
THEN I am presented with a formatted table showing 
  <!-- employee data, including  -->
<!-- * employee ids,  -->
<!-- * first names,  -->
<!-- * last names,  -->
<!-- * job titles,  -->
<!-- * departments,  --><!-- * REFERENCE department_id -->
<!-- * salaries,  -->
<!-- * managers that the employees report to --><!-- * REFERENCE department.manager_id -->
<!-- ????? TODO: CREATE Manager table?????? --->




# CREATE/post() -------------------

WHEN I choose to add a department
 <!-- TODO:  Inquirer Function to call working router.post(API/department)  -->
THEN I am prompted to enter the 
<!-- ? name of the department  -->
<!-- and that department is added to the database -->



WHEN I choose to add a role
 <!-- TODO:  Inquirer Function to call working router.post(API/role)  -->
THEN I am prompted to enter the 
<!-- ? name,  -->
<!-- ? salary,  -->
<!-- ? department_id for the role 
<!-- and that role is added to the database --> 


WHEN I choose to add an employee
 <!-- TODO:  Inquirer Function to call working router.post(API/employee)  -->
THEN I am prompted to enter the employee’s 
<!-- ? first name,  -->
<!-- ? last name,  -->
<!-- ? role, -->
<!-- ? and manager,  -->
<!-- and that employee is added to the database -->



# PUT ----------------------------------------------------
WHEN I choose to update an employee role
 <!-- TODO:  Inquirer Function to call working router.put(API/employee/:id)  -->
THEN I am prompted to 
<!-- ! select an employee to update and  -->
<!-- ? their new role  -->
<!-- and this information is updated in the database -->




### Bonus
Try to add some additional functionality to your application, such as the ability to do the following:

Update employee managers.

View employees by manager.

View employees by department.

Delete departments, roles, and employees.

View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.










===================================================================================
# EMPLOYEE_TRACKER
A database app used to track employee records

## Description



## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation) 
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badge](#license)

## Link to Repo
https://github.com/skouchy/EMPLOYEE_TRACKER

## Link to Application in ACTION
<!--![https://watch.screencastify.com/v/hI4xljqc0NWfY3nCDT5i] -->

### Screenshot
<!-- ![screenshot_skouchy_EMPLOYEE_TRACKER](https://user-images.githubusercontent.com/119292219/229270875-3c36d0c7-015f-49e9-a626-199ddf858f81.png) -->


## Installation

Initialize: `npm init -y`
Install: `npm i inquirer@8.2.4`
        `npm i --save mysql2`

Run: `node index.js`

## Usage
* javaScript
* NodeJS
* inquirer v8.2.4
* mysql2

## Credits
Github Usernames:

@lukas-h **License Links
@shields **License Badges

## License
[MIT](https://opensource.org/badge/license/MIT/)
### Badge

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Tests

a lil console.log() here, 
a lil console.log() there... ya know


GIVEN a command-line application that accepts user input


