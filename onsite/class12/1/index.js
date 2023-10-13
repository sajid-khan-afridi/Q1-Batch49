//////////////////////////
// class Point {
//     x = 0;
//     y = 0;
//   }
//   const pt = new Point();
//   // Prints 0, 0
//   console.log(`${pt.x}, ${pt.y}`);
//   const pt2 = new Point();
// // pt2.x = "0";
//////////////////////////Getters / Setters
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
const obj1 = new C();
console.log(obj1.length); //0
// console.log(obj1.length)
obj1.length = 10;
console.log(obj1.length);
export {};
//////////////////////////index signature
// class MyClass {
//   [s: string]: boolean | ((s: string) => boolean);
//   s=true;     //allowed 
//   //s="true";   //not allowed
//   check(s: string) {
//     return this["s"] as boolean;
//   }
// }
// const obj2=new MyClass();
// console.log(obj2.check("hello"));
// //////////////////////////Member Visibility
// class Greeter {
//   private greet() {
//     console.log("Hello, " + this.getName());
//   }
//   protected getName() {
//     return "hi";
//   }
// }
// class SpecialGreeter extends Greeter {
//   public howdy() {
//     // OK to access protected member here
//     console.log("Howdy, " + this.getName());
//   }
// }
// const g = new SpecialGreeter();
// // g.greet(); // OK
// // g.getName();
// ////////////////////////Static Members
// class Employee{
//   static count :number =0;
//   id:number=0;
//   name:string;
//   constructor(name:string){
//       this.name=name;
//       this.id=++Employee.count; 
//       // this.id=++this.count;//also check for
//   }
// }
// const objE1=new Employee("Ali")
// console.log(objE1.id)
// const objE2=new Employee("Ahmad")
// console.log(objE2.id)
// const objE3=new Employee("Asif")
// console.log(objE3.id)
