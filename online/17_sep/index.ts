//   //Note: All parameters are required

// //Named function
// function add(x: number, y: number): number {
//     return x+y;
// }

// //Anonymous function
// let myAdd1 = function(x: number, y: number): number { 
// 				return x+y; 
// };

// let a:string="string"

// //Anonymous function with explict type
// let myAdd2: (x1:number, y1:number)=>number = 	function(x: number, y: number): number { 
// 												return x+y; 
// 											};

// //type names dont matter
// let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): string { 
// 																return "hello"; 
// 															};
                                                            
// myAdd3(2,3)
//                                                             //Lambda functions															
// let myAdd4 = (a : number, b : number) => a + b;
// //output will be: var myAdd4 = function(a : number, b : number) {return a + b};

// type GreetFunction = (a: string) => number;

// function greeter(fn: GreetFunction) {
// 	//....
// }
// greeter(()=>console.log(""))

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
// function(firstName: string, lastName?: string) : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }

//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
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

function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	console.log(restOfName)
    return firstName + " " + restOfName.join(".");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName)



//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest:(number|string)[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}
