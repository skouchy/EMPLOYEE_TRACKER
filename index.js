const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'list',
    name: 'gender',
    message: 'What is your gender?',
    choices: ['Male', 'Female', 'Other']
  }
]).then(answers => {
  console.table(answers);
});





// function init(choices) => {
//     prompt.inquirer(
//         type: listenerCount,
//         name: 
//     )

// }
// )