// let myname: string | null;



// //myname;

// myname = null;
// myname;
// myname="Asif";//narrowing

// myname;
// myname=10;
// console.log(myname);


// let myAge: string | number;

// myAge = 16;//narrowing
// myAge;
// myAge.toFixed();
// console.log(myAge);
// // myAge.toLowerCase();

// myAge="Hello";
// myAge;

// myAge.toLowerCase();

// let newAge = Math.random() > 0.6 ? "Khan": 60;

// newAge="Hello"
// newAge.toLowerCase();//Error: Transpiler cannot narrow

// if (newAge === "Khan") {
//     newAge.toLowerCase();
// }else {
//     newAge.
// }



// if(typeof newAge === "string"){
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }else{
//     newAge.toFixed();
// }

// typeof newAge === "string"
// ? newAge.toUpperCase() // Ok: string
// : newAge.toFixed(); // Ok: number

// let age: number | "died" | "unknown"|"living";

// age = 90;//OK
// age = "died";//OK
// age = "unknown";//OK
// age = "living";//Error
// age=""


// let zia:"zia";

// zia = "zia";
// zia = "khan";//Error

// const b=10;
// b=20;
// let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;
// condition?"":""

// if (yourName) {
//     yourName.toUpperCase(); // Ok: string
// }

// yourName?.toUpperCase();//OK



// You can also define a type alias
// type RawData = boolean | number | string | null | undefined;

// let data: RawData;

// data="Airline";

// let val:RawData;

// // You can even combine them

// type Id = number | string;

// type IdMaybe = Id | undefined | null;



// let teacher = {
//     name: "Zeeshan",
//     experience: "10"
// }

// console.log(teacher.name);
// console.log(teacher["experience"]);

// let str="Ali"
// // Type Declaration
// let student : {
//     name: string,
//     age: number
// }

// student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);

// // anonymous

// let teacher : {name: string, exp: number} = {
//     name: "Zeeshan",
//     exp: 10
// }

// // Aliased Object Type
// interface Student {
//     name: string,
//     age: number
// }

// let student: Student = {
//     name: "Hira",
//     age:20
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


  interface Tube {
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };//fresh
  
  ball = tube;//stale
  console.log("ball= ",ball)
// //   tube = ball;//Error

//   fresh or stale
// // =================================== fresh

let myType = { name: "Zia", id: 1 };
myType;

// //Case 1
// myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
// 									//Object literals can only have properties that exist in contextual type


// //Case 2a
// myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property

//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

// var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

// x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature
// x = { id: 2, fullname: "Zia",address:"Peshawar" };  // Ok, `fullname` matched by index signature

// //Case 3
// myType;
// myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property

// //=================================================stale


// //Case when STALE object literal are assigned to a variable 

// let myType2 = { id: 2,  name: "Tom" };//

// myType;
// //Case 1
// myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

// let myType3 = { id: 2,  name_person: "Tom" };
// //Case 2a
// myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 


// //Case 2b
// //A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

// var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
// var y = { id: 1, fullname: "Zia",address:"Peshawar"};
// x = y;// Ok, `fullname` matched by index signature


var myType4 = { id: 2,  name: "Tom", age: 22 };

// //Case 3
// myType;
myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object

console.log(myType)

// var x: { foo: number };
// x = { foo: 1, baz: 2 };  // Error, excess property `baz`

// var y: { foo: number, bar?: number };
// y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`



var a: { foo: number };
var a1 = { foo: 1, baz: 2 };
a = a1;//No Error

var z: { foo: number, bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1;//No Error
console.log("z= ",z)


// type Author = {
//     firstName: string;
//     lastName: string;
// };

// type Book = {
//     author: Author;
//     name: string;
// };

// let book:Book={
//     author:{
//         firstName:"Ali",
//         lastName:"Khan"
//     },
//     name:"Javascript"
// }

// console.log(book.author.firstName)

// type Student {
//     student_id: number;
//     name: string;
//   }
    
// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }
    
// type intersected_type = Student & Teacher;
    
// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };
    
// console.log(obj1.teacher_Id);
// console.log(obj1.name);