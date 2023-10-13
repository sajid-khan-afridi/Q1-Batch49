import inquirer from "inquirer";
import chalk from "chalk";




(async function calculator(){

    let answers = await inquirer.prompt([
        {
            name: "num1",
    type: "number",
    message: "Enter your First number:",
  },
  {
      name: "num2",
    type: "number",
    message: "Enter second number: ",
  },
  {
    name: "operation",
    type: "list",
    choices: ["add", "sub", "mul", "div"],
    message: "Enter your operation: ",
},
]);




})()