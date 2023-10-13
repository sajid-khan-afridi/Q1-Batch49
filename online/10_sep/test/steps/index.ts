// // Any

// let myval: any;

// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK


// //Unknown

// let value: unknown;

// value = true; // OK
// value = 42; // OK
// value = "hey!"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = () => { console.log('Hey again!'); }; // OK


// // Assigning a value of type unknown to variables of other types

// let val: unknown;

// const val1: unknown = val; // OK
// const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error


// // Never

// // Function returning never must not have a reachable end point
// function error(message: string): never {
//   throw new Error(message);
// }
 
// // Inferred return type is never
// function fail() {
//   return error("Something failed");
// }
 
// // Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//   while (true) {}
// }


// let myname: unknown = "Zia";
// console.log((myname as string).length);
// console.log((<string> myname).length)

// let newString:string=myname as string
// newString

// const enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// console.log("c",c)

// const enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);

// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);

let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1[1]);//correct syntax
let array2:Array<number> = [1, 2, 3];//alternative correct syntax
let array3 : number[] = [];//correct syntax to define an empty array

let array4: number[] = new number[2];//error

let array5: number[] = [];
array5.push(1234);//dynamically adding


