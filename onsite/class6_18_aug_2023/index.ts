// let message = "Hello World";// Infering Types, 
//                             //take your cursor on the variable name
// console.log(message);

// let stuName1="ali";
// let stuName2="ahmad";
// let address1="Peshawar";
// let address2="Lahore";

// let student1={
//     stuName1:"Ali",
//     stuAddress:"Peshawar",
//     age:28,
//     pass:true,
//     hobbies:["game","watch news"],
//     func:function(){
//         console.log("Hello")
//     }
// }
// console.log(student1.hobbies)
// student1.func();

// let arr=[1,2,3,4];

// let arr2=[{
//     stuName1:"Ali",
//     stuAddress:"Peshawar",
//     age:28,
//     pass:true,
//     hobbies:["game","watch news"],
//     func:function(){
//         console.log("Hello")
//     }
// },
// {
//     stuName1:"Ali",
//     stuAddress:"Peshawar",
//     age:28,
//     pass:true,
//     hobbies:["game","watch news"],
//     func:function(){
//         console.log("Hello")
//     }
// }

// ]

// lett message = "Hello World";//syntax error
// console.log(message);

// let message = "Hello World";
// console.loger(message);

// let message = "Hello World";
// message = 6;
// console.log(message);

// //strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true;

// //type inference
// let e = "USA";
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;


// //use const where variable values do not change
// const a = 5;
// const b : number = 33;
// const c ="best";

// //I suggest use let instead of var everywhere, 
// //becuase let has blocked scope
// if (true) {
// 	let z = 4;
// 	//use z
// }
// else {
// 	let z = "string";
// 	//use z
// }
// console.log("let: " + z);// Error: z is not defined in this scope

let arr1 = [1, 2, 3, 4]; 
arr1 = [5, 6, 7, 8]; // This is fine
const arr2 = [1, 2, 3, 4]; 
// arr2 = [5, 6, 7, 8]; // This will throw an error
arr2.push(5,6,7,8)
