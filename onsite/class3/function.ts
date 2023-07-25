//"My name is" + num1 +"and I am" +num2 +"years old"
//My name is Ali and I am 18 years old
function sum(num1:number,num2:number):void{
    console.log(num1+num2)
}
// sum("Ali",19)

let sum3=(num1:number,num2:number)=>{
    console.log(num1+num2)
}
sum3(28,40);
sum(20,25);
sum(30,29);

function sum2(num1:number,num2:number){
    let add=num1+num2+50;//logic
    return add;
}
let sum4=(num1:number,num2:number)=>num1+num2;


let result=sum(39,28);
console.log("sum2 =",result)

let result2=sum4(29,49);

let myName=(name1:string,age:number)=>`My name is ${name1} and I am ${age} years old`

let sentence=myName("Ali",19);
console.log(sentence)