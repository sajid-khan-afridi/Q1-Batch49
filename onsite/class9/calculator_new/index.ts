#! /usr/bin/env node
import inquirer from "inquirer";

let {num2,num1,operation} = await inquirer.prompt([
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
