// //Tuple types have the advantage that you can accurately describe the type of an array of mixed types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var tuple: [number, string] = [1, "bob"];
// var secondElement = tuple[1];  // secondElement now has type 'string' 
// let arr:number[]=[1,2,3,4]
// let arr2=[1,"str",2,"str2","str3"]
// // Typically an array contains zero to many objects of a
// // single type. TypeScript has special analysis around
// // arrays which contain multiple types, and where the order
// // in which they are indexed is important.
// // These are called tuples. Think of them as a way to
// // connect some data, but with less syntax than keyed objects.
// // You can create a tuple using JavaScript's array syntax:
// const failingResponse = ["Not Found", 404];
// // but you will need to declare its type as a tuple.
// const passingResponse: [string, number] = ["{}", 200];
// // If you hover over the two variable names you can see the
// // difference between an array ( (string | number)[] ) and
// // the tuple ( [string, number] ).
// // As an array, the order is not important so an item at
// // any index could be either a string or a number. In the
// // tuple the order and length are guaranteed.
// if (passingResponse[1] === 200) {
//   const localInfo = JSON.parse(passingResponse[0]);
//   console.log(localInfo);
// }
// // This means TypeScript will provide the correct types at
// // the right index, and even raise an error if you try to
// // access an object at an un-declared index.
// // passingResponse[2];
// // A tuple can feel like a good pattern for short bits of
// // connected data or for fixtures.
// type StaffAccount = [number, string, string, string?];
// const staff: StaffAccount[] = [
//   [0, "Adankwo", "adankwo.e@"],
//   [1, "Kanokwan", "kanokwan.s@"],
//   [2, "Aneurin", "aneurin.s@", "Supervisor"],
// ];
// // When you have a set of known types at the beginning of a
// // tuple and then an unknown length, you can use the spread
// // operator to indicate that it can have any length and the
// // extra indexes will be of a particular type:
// type PayStubs = [StaffAccount, ...number[]];
// const payStubs: PayStubs[] = [
//   [staff[0], 250],
//   [staff[1], 250, 260],
//   [staff[0], 300, 300, 300],
// ];
// const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
// const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
// const monthThreePayments = payStubs[2][2];
// // You can use tuples to describe functions which take
// // an undefined number of parameters with types:
// declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;
// calculatePayForEmployee(staff[0][0], payStubs[0][1]);
// calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);
// //
// // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
// // https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/
// let obj1={
//     firstName:"Ali",
//     lastName:"Khan",
//     display(){
//         console.log(this.firstName)
//     }
// }
// obj1.display();
// class User{
//     firstName:string;
//     lastName!:string;
//     constructor(fn:string){
//         this.firstName=fn;
//     }
//     display(){
//         console.log(this.firstName)
//     }
// }
// const obj2=new User("Ahmad");
// obj2.display()
// const obj3=new User("Basit");
// obj3.display();
var Operation = /** @class */ (function () {
    function Operation(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    ;
    return Operation;
}());
var Addition = /** @class */ (function (_super) {
    __extends(Addition, _super);
    function Addition(a, b) {
        return _super.call(this, a, b) || this; //parent class constructor is called
    }
    ;
    Addition.prototype.execute = function () {
        return this.num1 + this.num2;
    };
    return Addition;
}(Operation));
var Subtraction = /** @class */ (function (_super) {
    __extends(Subtraction, _super);
    function Subtraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtraction.prototype.execute = function () {
        return this.num1 - this.num2;
    };
    return Subtraction;
}(Operation));
var obj1 = new Addition(12, 10);
console.log(obj1.execute());
var obj2 = new Subtraction(22, 11);
console.log(obj2.execute());
