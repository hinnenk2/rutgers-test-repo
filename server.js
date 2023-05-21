const inquirer = require('inquirer'); //import necessary modules
const mysql = require('mysql2');
const cTable = require('console.table'); // console.table npm, call once somewhere in the beginning of the app
require('dotenv').config();

const db = mysql.createConnection( //establish connection for mysql
  {
    host: 'localhost',
    user: 'root', // Enter mysql username
    password: 'password', // Enter mysql password
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the employee tracker db!`)
);

function askQuestion(toStart) { //Sets up an array of objects for inquirer
  const questions = [
    {
      type: 'input',
      name: 'startUp', //name acts as an identifier
      message: 'Press any key or Enter to continue',
      when: !toStart,  //message displays when function is not running
    },
    {
      type: 'list',
      name: 'likeToDo',
      message: `What would you like to do?`,
      choices: [
        'View All Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department',
        'Quit',
      ],
    },
  ];

  inquirer
    .prompt(questions)
    .then((data) => { //data is acquired from user's input.
      switch (data.likeToDo) {
        case 'View All Employees':
          displayAll(`SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, salary, CONCAT(manager.first_name , " ", manager.last_name) as Manager
          FROM employee
          INNER JOIN role ON employee.role_id = role.id
          INNER JOIN department ON role.department_id = department.id
          LEFT JOIN employee manager ON employee.manager_id = manager.id
          ORDER BY id;`);
          break;

        case 'Add Employee':
          addEmployee();
          break;

        case 'Update Employee Role':
          updateEmployeeRole();
          break;

        case 'View All Roles':
          displayAll(`SELECT role.id AS id, role.title AS title, department.name AS department, role.salary AS salary
          FROM role
          INNER JOIN department ON role.department_id = department.id`);
          break;

        case 'Add Role':
          addRole();
          break;

        case 'View All Departments':
          displayAll(`SELECT department.id AS id, name AS department
          FROM department;`);
          break;
        
        case 'Add Department':
          addDepartment();
          break;

        default:
          process.exit();
          break;
      }
    })
    .catch((err) => console.error(err));
}

//General view all results function
function displayAll(userSelect) { //Allows user to view likeToDo list
  db.query(userSelect, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result); //Displays user selection in the form of a table
    askQuestion();    //Refers back to main menu
  });
}

function addDepartment() { //Adds a new department
  const question = [
    {
      type: 'input',
      name: 'addDepartment',
      message: `What is the name of the department?`,
    },
  ];

  inquirer.prompt(question).then(({ addDepartment } = data) => { //The newly added department is named here and added directly below.
    const userSelect = `INSERT INTO department(name)             
          Values ('${addDepartment}');
          `;
    db.query(userSelect, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.info(`${addDepartment} has been added to the database.`);
      askQuestion();
    });
  });
}

async function addRole() { //Adds a new role using an asynchronous function, requires user input to resolve.
  try {
    const [result] = await db.promise().query(`SELECT * FROM department`);

    const deptName = result.map(({ id, name }) => {
      return { name, value: id };
    });

    const question = [
      {
        type: 'input',
        name: 'title',
        message: `What is the name of the role?`,
      },
      {
        type: 'input',
        name: 'salary',
        message: `What is the salary of the role?`,
      },
      {
        type: 'list',
        name: 'department_id',
        message: `which department does the role belong to?`,
        choices: deptName,
      },
    ];

    const data = await inquirer.prompt(question); //data attains its value once the new-role questions have been answered
    const userSelect = `INSERT INTO role SET ?`; //inserts the new role into the role table based on the user's settings.
    await db.promise().query(userSelect, data);

    console.info(`Added ${data.title} the database`);
    askQuestion();
  } catch (err) {
    console.log(err);
  }
}

async function addEmployee() { //Adds a new employee.
  let roleList, managerList; //defines roleList and Manager List

  const [roles] = await db.promise().query(`SELECT title, id FROM role`); //associates the role id with the department id.
  roleList = roles.map(({ title, id }) => { //roleList array is derived from titles of the roles table.
    return { name: title, value: id };
  });

  const [managers] = await db //Acquires list of managers based on managers not having managers (NULL).
    .promise()
    .query(
      `SELECT first_name, last_name, id FROM employee WHERE employee.manager_id IS NULL`
    );

  managerList = managers.map(({ first_name, last_name, id }) => { //maps manager list based on full name.
    return { name: `${first_name} ${last_name}`, value: id };
  });
  managerList.push({ name: 'None', value: null }); //Adds None as an option

  const question = [ //Question prompt for adding the new employee.
    {
      type: 'input',
      name: 'first_name',
      message: `What is the employee's first name?`,
    },
    {
      type: 'input',
      name: 'last_name',
      message: `What is the employee's last name?`,
    },
    {
      type: 'list',
      name: 'role_id',
      message: `What is the employee's role?`,
      choices: roleList,
    },
    {
      type: 'list',
      name: 'manager_id',
      message: `Who is the employee's manager?`,
      choices: managerList,
    },
  ];

  const data = await inquirer.prompt(question); //adds the new employee to the table similar how a new role is added (lines 150-152).
  const userSelect = `INSERT INTO employee SET ?`; 
  await db.promise().query(userSelect, data);

  console.info(`Added ${data.first_name} ${data.last_name} to the database`);

  askQuestion();
}

async function updateEmployeeRole() { //Updates an employee's role
  const userSelect = `SELECT id, first_name, last_name FROM employee`;

  let employeeList, roleList; //defines the list of roles/employees.  

  const [employees] = await db.promise().query(userSelect); //attains employee list in terms of first/last name.
  employeeList = employees.map(({ id, first_name, last_name } = employee) => {
    return { name: `${first_name} ${last_name}`, value: id };
  });

  const [roles] = await db.promise().query(`SELECT title, id FROM role`); //attains role list in terms of title.
  roleList = roles.map(({ title, id }) => {
    return { name: title, value: id };
  });

  const question = [ //sets up the inquirer question prompt for updating an employee's role.
    {
      type: 'list',
      name: 'employee_id',
      message: `Which employee's role do you want to update`,
      choices: employeeList,
    },
    {
      type: 'list',
      name: 'role_id',
      message: `Which role do you want to assign to the selected employee?`,
      choices: roleList,
    },
  ];

  inquirer.prompt(question).then(({ employee_id, role_id }) => {  //updates an employee's role similar to how a new employee is added.
    const userSelect = `UPDATE employee SET role_id = ${role_id} WHERE id = ${employee_id};`;

    db.query(userSelect, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.info(`Updated employee's role`);
      askQuestion();
    });
  });
}

askQuestion(true); //Set the function to true to display the likeToDo question prompt upon loading.
