//comparing object and class
var obj1 = {
    firstName: "Ali",
    lastName: "Khan",
    // DOB:"12-12-2000",
    address: "Peshawar",
    display: function () {
        console.log("First Name= " + this.firstName, "Last Name= " + this.lastName, "Addrss= " + this.address);
    }
};
// console.log(this)
obj1.display();
obj1.firstName;
var User = /** @class */ (function () {
    function User(firstName, LN, AD) {
        this.firstName = firstName;
        this.lastName = LN;
        this.address = AD;
    }
    User.prototype.display = function () {
        console.log("First Name= " + this.firstName, "Last Name" + this.lastName, "Address= " + this.address);
    };
    return User;
}());
var obj2 = new User("Ahmad", "khan", "Lahore"); //called constructor()
var obj3 = new User("Basit", "Ali", "Karachi");
obj2.display(); //Ahmad
obj3.display(); //Basit
console.log(obj1, obj2, obj3);
obj2.address;
var date = new Date();
console.log(date);
