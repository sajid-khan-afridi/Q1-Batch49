// // class Greeter {
// //     readonly name: string = "world";
// //     constructor(otherName?: string) {
// //       if (otherName !== undefined) {
// //         this.name = otherName;
// //       }
// //     }
// //     err() {
// //     //   this.name = "not ok";
// // //   Cannot assign to 'name' because it is a read-only property.
// //     }
// //   }
// //   const g = new Greeter();
// // //   g.name = "also not ok";
// // console.log(g.name)
// // class Point {
// //     x: number;
// //     y: number;
// //     // Normal signature with defaults
// //     constructor(x = 0, y = 0) {
// //       this.x = x;
// //       this.y = y;
// //     }
// //     constructor(x = 0) {
// //       this.x = x;
// //       this.y = y;
// //     }
// //     constructor(x = 0, y = 0) {
// //       this.x = x;
// //       this.y = y;
// //     }
// //   }
// // class Point {
// //     // Overloads
// //     constructor(x: number, y: string);
// //     constructor(s: string);
// //     constructor(xs: any, y?: any) {
// //       // TBD
// //     }
// //   }
// class C {
//     x: string = "hello";
//     m() {
//       // This is trying to modify 'x' from line 1, not the class property
//       this.x = "world";
// //   Type 'string' is not assignable to type 'number'.
//     }
//   }
// //   class child extends C{
// //     constructor(){
// //         super();
// //         this.x
// //     }
// //   }
// //   class grandChild extends child{
// //     constructor(){
// //         super();
// //         this.x;
// //     }
// //   }
//   const obj1=new C();
// //   const obj2=new child();
// class MyClass {
//     [s: string]: boolean | ((s: string) => boolean);
//     x=true;
//     // y=10;
//     check(s: string) {
//       return this[s] as boolean;
//     }
//   }
//   interface Pingable {
//     ping(): void;
//   }
//   class Sonar implements Pingable {
//     pong(){
//     }
//     ping() {
//       console.log("ping!");
//     }
//   }
class MyClass {
    static x = 0;
    static printX() {
        console.log(MyClass.x);
    }
    constructor() {
        ++MyClass.x;
    }
}
const obj1 = new MyClass();
console.log(MyClass.x);
const obj2 = new MyClass();
console.log(MyClass.x);
export {};
