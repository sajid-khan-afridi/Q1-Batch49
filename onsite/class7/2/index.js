import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter your First:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter second number: "
    },
    {
        name: "operation",
        type: "list",
        choices: ["add", "sub", "mul", "div"],
        message: "Enter second number: ",
    },
]);
// console.log(chalk.bgRedBright("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
console.log(answers);
