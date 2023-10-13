#! /usr/bin/env node
import inquirer from "inquirer";
import {sum,subtract} from "./functions.js"
import showBanner from "node-banner";
import gradient from "gradient-string"


let answers=[
  {
      name: "num1",
      type: "number",
      message: gradient.rainbow("Enter your First number:"),
      validate:(input:number)=>{
        if(isNaN(input)){
          return "Please enter number: "
        }
        return true;
      }
  },
  {
      name: "num2",
      type: "number",
      message:gradient.rainbow( "Enter second number: "),
      validate:(input:number)=>{
        if(isNaN(input)){
          return "Please enter number: "
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
      message:"Do you want to calculate again"
  }
];

(async () => {
  await showBanner('Calculator', 'This calculator can perform addition, subtraction, multiplication and division',"red","blue");
})();

async function calculator(){
let condition=true;
while(condition){
  let {num2,num1,operation} = await inquirer.prompt(answers);
  if(operation==="add"){
    console.log("The sum of two numbers: ", sum(num1,num2))
  }else if(operation==="sub"){
    console.log("The difference of two numbers: ", subtract(num1,num2))
  }
  let {again}=await inquirer.prompt(answer);
  condition=again;
}
}

setTimeout(() => {
  
  calculator();
}, 1000);
  