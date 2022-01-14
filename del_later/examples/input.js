/**
 * Input prompt example
 */

'use strict';
//const inquirer = require('inquirer');
import inquirer from 'inquirer';
import chalkPipe from 'chalk-pipe';
//const chalkPipe = require('chalk-pipe');
let ctr=1;
const questions = [
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
    prefix:ctr++,
    default:"kathy",
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default() {
      return 'Doe';
    },
  },
  {

    type: 'input',
    name: 'fav_color',
    when: (answer)=> {return !answer.last_name==="Doe"},
    message: "What's your favorite color",
    default : (ans)=>{return ans.last_name},
    transformer(color, answers, flags) {
      const text = chalkPipe(color)(color);
      if (flags.isFinal) {
        return text + '!';
      }

      return text;
    },
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number",
    validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
