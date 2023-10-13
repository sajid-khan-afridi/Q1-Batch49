abstract class Operation{
    num1:number;
    num2:number;
    constructor(num1:number,num2:number){
        this.num1=num1;
        this.num2=num2;
    }
    abstract execute():number;
}

class Subtraction extends Operation{
    private num3:string;
    constructor(a:number,b:number,c:string){
        super(a,b);
        this.num3=c;
        this.num1=a;
    }
    execute(){
        this.num3="hello"
        return this.num1-this.num2
    }
}
class Addition extends Operation{
    execute(){
        return this.num1+this.num2
    }
}

const obj1=new Subtraction(23,10,"22");
const obj2=new Addition(23,10);

console.log(obj1.execute())
console.log(obj2.execute())