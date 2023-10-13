// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "zia";
// myname;
// console.log(myname);

// //myname = undefined; //Error
// //myname = 12; //Error

// let myAge: string | number;

// myAge = 16;//narrowing
// myAge;
// console.log(myAge);

// //console.log(myAge.toLowerCase());//Error

// myAge = "Dont Know";//narrowing
// myAge;
// console.log(myAge);

// console.log(myAge.toString()); // common to both types 
//                                //can be called even without narrowing

// console.log(myAge.toLowerCase());//Can be called on string 
//                                 //because of narrowing

// let newAge = Math.random() > 0.6 ? "Khan": 60;

// // newAge.toLowerCase();//Error: Transpiler cannot narrow

// if (newAge === "Khan") {
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }

// if(typeof newAge === "string"){
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }else{
//     newAge.
// }

// typeof newAge === "string"
// ? newAge.toUpperCase() // Ok: string
// : newAge.toFixed(); // Ok: number


// let age: number | "died" | "unknown";

// age = 40;//OK
// age = "died";//OK
// age = "unknown";//OK
// // age = "living";//Error

// const c=10;

// let zia: "zia";

// zia = "zia";
// //zia = "khan";//Error


// let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

// if (yourName) {
//     yourName.toUpperCase(); // Ok: string
// }

// //yourName.toUpperCase();//Error: Object is possibly 'undefined'.

// yourName?.toUpperCase();//OK

// // You can also define a type alias
// type RawData = boolean | number | string | null | undefined;

// let data: RawData;

// // You can even combine them

// type Id = number | string;

// type IdMaybe = Id | undefined | null;

// let student : {
//     name: string,
//     age: number
// }= {
//     name: "Hira",
//     age: 30
// }


// let student:{name:string,age:number}={
//     name:"Hira",
//     age:20,
// }
// console.log(student["name"]);
// console.log(student.age);


// These two interfaces are completely
// transferrable in a structural type system:

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  
  sphere = ball;
  ball = sphere;
  
  // If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.
  
  interface Tube {
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };
  
  //tube = ball;//Error
  ball = tube;
//   ball={diameter:20,length:10}
  
  // Because a ball does not have a length, then it cannot be
  // assigned to the tube variable. However, all of the members
  // of Ball are inside tube, and so it can be assigned.
  
  // TypeScript is comparing each member in the type against
  // each other to verify their equality.

//===================================================

// Now lets do it Case By Case


//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 

// let myType = { name: "Zia", id: 1 };

// //Case 1
// myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
// 									//Object literals can only have properties that exist in contextual type


// //Case 2a
// myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property

// //Case 2b 
// //A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

// var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
// x={id:1, address:"Lahore",age:20}
// x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature


// //Case 3
// myType;
// myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property



// //=================================================


// //Case when STALE object literal are assigned to a variable 

// let myType2 = { id: 2,  name: "Tom" };

// //Case 1
// myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

// let myType3 = { id: 2,  name_person: "Tom" };
// //Case 2a
// myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 


// //Case 2b
// //A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

// var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
// var y = { id: 1, fullname: "Zia" };
// x = y;// Ok, `fullname` matched by index signature


// var myType4 = { id: 2,  name: "Tom", age: 22 };

// //Case 3
// myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object






// var x1: { foo: number };
// x1 = { foo: 1, baz: 2 };  // Error, excess property `baz`

// var y1: { foo: number, bar?: number };
// y1 = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`



// var a2: { foo: number };
// var a1 = { foo: 1, baz: 2 };
// a2 = a1;//No Error
// a2;

// var z: { foo: number, bar?: number };
// var z1 = { foo: 1, baz: 2 };
// z = z1;//No Error

// type Author = {
//     firstName: string;
//     lastName: string;
// };

// type Book = {
//     author: Author;
//     name: string;
// };

// let myBook:Book={
//     author:{
//         firstName:"Ali",
//         lastName:"Khan"
//     },
//     name:"Javascript"
// }

// Any

let myval: any;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK


//Unknown

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK


// Assigning a value of type unknown to variables of other types

let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
const val3: boolean = val; // Will throw error
const val4: number = val; // Will throw error
const val5: string = val; // Will throw error
const val6: Record<string, any> = val; // Will throw error
const val7: any[] = val; // Will throw error
const val8: (...args: any[]) => void = val; // Will throw error

let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string> myname).length)

let num="1";
console.log((num as unknown as number).);

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
  }
   
  // Inferred return type is never
  function fail() {
    return error("Something failed");
  }
   
  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {}
  }