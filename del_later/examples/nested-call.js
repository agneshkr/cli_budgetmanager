/**
 * Nested Inquirer call
 */

'use strict';
const inquirer = require('../Inquirer.js/packages/inquirer/lib/inquirer');

inquirer
  .prompt({
    type: 'list',
    name: 'chocolate',
    message: "What's your favorite chocolate?",
    choices: ['Mars', 'Oh Henry', 'Hershey'],
  })
  .then(() => {
    inquirer.prompt({
      type: 'list',
      name: 'beverage',
      message: 'And your favorite beverage?',
      choices: ['Pepsi', 'Coke', '7up', 'Mountain Dew', 'Red Bull'],
    });
  });
