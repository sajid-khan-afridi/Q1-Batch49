//comparing object and class
const obj1={
    firstName:"Ali",
    lastName:"Khan",
    // DOB:"12-12-2000",
    address:"Peshawar",
    display(){
        console.log("First Name= "+this.firstName,"Last Name= "+this.lastName,"Addrss= "+this.address)
    }
}
// console.log(this)
obj1.display()
obj1.firstName
class User{
    firstName:string;
    lastName:string;
    address:string;
    constructor(firstName:string,LN:string,AD:string){
        this.firstName=firstName;
        this.lastName=LN;
        this.address=AD;
    }
    display(){
        console.log("First Name= "+this.firstName,"Last Name"+this.lastName,"Address= "+this.address)
    }
}
const obj2=new User("Ahmad","khan","Lahore");//called constructor()
const obj3=new User("Basit","Ali","Karachi")
obj2.display();//Ahmad
obj3.display();//Basit
console.log(obj1,obj2,obj3)
obj2.address

const date=new Date();
console.log(date)

const arr=[1,2,3,4,5];