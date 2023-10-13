#! /usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./function.js";
import showBanner from "node-banner";
import gradient from "gradient-string"

let answers=[
        {
            name: "num1",
            type: "number",
            message: "Enter your First number:",
            validate:(input:number)=>{
              if(isNaN(input)){
                return "Please enter number"
              }
              return true;
            }
        },
        {
            name: "num2",
            type: "number",
            message:"Enter second number: ",
            validate:(input:number)=>{
              if(isNaN(input)){
                return "Please enter number"
              }
              return true;
            }
        },
        {
            name: "operation",
            type: "list",
            choices: ["add", "sub", "mul", "div"],
            message: gradient.rainbow("Enter your operation: "),
        },
];

let answer=[
  {
    name:"again",
    type:"confirm",
    message:"Do you want to calculate again: "
  }
];

(async () => {
  await showBanner('Calculator', "This calculator can Add, Subtract, Multiple and Divide","blue","red");
})();

async function calculator(){
  let condition=true;
  while(condition){
  let {num2,num1,operation} = await inquirer.prompt(answers);
  if(operation==="add"){
    console.log("Sum of two numbers are: ",sum(num1,num2))
  }
  
  let {again}= await inquirer.prompt(answer);
  condition=again;
}
}

setTimeout(() => {
  
  calculator();
}, 1000);