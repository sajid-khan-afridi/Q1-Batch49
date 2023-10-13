import inquirer from "inquirer";
import chalk from "chalk";

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

// console.log(chalk.bgRedBright("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
console.log(answers);
