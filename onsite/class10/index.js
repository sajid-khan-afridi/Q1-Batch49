// //Note: All parameters are required
// //Named function
// function add(x: number, y: number) {
//     return x+y;
// }
// add(1,1);
// //Anonymous function
// let myAdd1 = function(x: number, y: number): number { 
// 				return x+y; 
// };
// type myfun=(x:number,y:number)=>number
// //Anonymous function with explict type
// let myAdd2: (x:number, y:number)=>number = 	function(a, b ){ 
// 												return a+b; 
// 											};
// //type names dont matter
// let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
// 																return x+y; 
// 															};
// //Lambda functions															
// let myAdd4 = (a : number, b : number) => a + b;
// //output will be: var myAdd4 = function(a : number, b : number) {return a + b};
// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
// 	//....
// }
//Named function with optional parameters
// function buildName(firstName: string, lastName?: string) : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
// let result1 = buildName("Bob");  //ok
// let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
// var result3 = buildName("Bob", "Adams");  //also ok
// //anonymous function type with optional parameters
// var buildName1 : (firstName: string, lastName?: string) => string = 
// function(firstName, lastName)  {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
// function buildName(firstName: string, lastName = "Khan") : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
// let result1 = buildName("Bob");  //works correctly because last parameter is optional
// let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
// let result3 = buildName("Bob", "Adams");  //correct
// //anonymous function type with defult parameters 
// //(Note that the parameter type will be optional when used with defult value)
// let buildName1 : (firstName: string, lastName?: string) => string = 
// function(firstName: string, lastName = "Khan") : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
// function buildName(firstName: string,restOfName: string[]) {//Named function with Rest parameters
//     console.log(restOfName)
// 	return firstName + " " + restOfName.join(" ");
// }
// var employeeName = buildName("Joseph", ["Samuel", "Lucas", "MacKinzie"]);
// console.log(employeeName)
// //anonymous function type with Rest parameters
// var buildNameFun: (fname: string, ...rest: string[])=>string =
// function (firstName: string, ...restOfName: string[]) {
// 	return firstName + " " + restOfName.join(" ");
// }
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }
// function callingFunction(initialText: string, callback: (txt: string) => void)
// {
//     callback(initialText);
// }
// callingFunction("myText", myCallBack);
// function delay(milliseconds: number): Promise<void> {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, milliseconds);
//     });
//   }
//Using `then`, `catch`, and `finally`:
//   delay(1000)
//     .then(() => {
//       console.log('The delay is over');
//     })
//     .catch((error) => {
//       console.error('Something went wrong:', error);
//     })
//     .finally(() => {
//       console.log('This is always executed');
//     });
// //   //Using `async/await`:  
//   try {
//       await delay(1000);
//       console.log('Await: The delay is over');
//   } catch (error) {
//       console.error('Await: Something went wrong:', error);
//   } finally {
//       console.log('Await: This is always executed');
//   }
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list, 
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }
// //Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, "2"));
// console.log(add("Hello", "World"));
// console.log(add(true, false));
var arr = [1, 2, 3, 4, 5, 6];
var tuple = [1, "bob"];
var secondElement = tuple[1]; // secondElement now has type 'string' 
// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.
// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.
// You can create a tuple using JavaScript's array syntax:
const failingResponse = ["Not Found", 404];
// but you will need to declare its type as a tuple.
const passingResponse = ["{}", 200];
if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
}
const staff = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
const payStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];
export {};
// calculatePayForEmployee(staff[0][0], payStubs[0][1]);
// calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);
