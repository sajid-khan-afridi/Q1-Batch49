// let a=10;

// console.log("hello")

// json vs js object

let fruits=["orange","kiwi"];

let stuName="ALi";
let age=27;
let pass=true;

let student1={
    name:"Ali",
    age:27,
    pass:true,
    hobbies:["games","cricket"],
    fun: function(){
        console.log("hello")
    },
    sum(){                      //method
        console.log(5+9)
    }
}


console.log(student1)
student1.fun();
// student1.

// student1.sum();



// let message = "Hello World";//syntax error
// console.log(message);

// let message = "Hello World";
// console.log(message);

// //strongly typed syntax or type annotation or explicit typing 
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true;

// //type inference or implicit typing
// let e = "USA";
// // e=7;
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;

// let ab:string;


// let arr=[1,2,3,4,5];
// arr=[3,4,6,7];

// const arr2=[1,2,3,4,5];
// // arr2=[1,34,5,6]
// arr2.push(1,34);


//use const where variable values do not change
const a = 5;
a=39;
const b : number = 33;
const c ="best";

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z
}
console.log("let: " + z);// Error: z is not defined in this scope