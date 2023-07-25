//"My name is" + num1 +"and I am" +num2 +"years old"
//My name is Ali and I am 18 years old
function sum(num1, num2) {
    console.log(num1 + num2);
}
// sum("Ali",19)
var sum3 = function (num1, num2) {
    console.log(num1 + num2);
};
sum3(28, 40);
sum(20, 25);
sum(30, 29);
function sum2(num1, num2) {
    var add = num1 + num2 + 50; //logic
    return add;
}
var sum4 = function (num1, num2) { return num1 + num2; };
var result = sum(39, 28);
console.log("sum2 =", result);
var result2 = sum4(29, 49);
function myName(name1, age) {
    return "My name is ".concat(name1, " and I am ").concat(age, " years old");
}
var sentence = myName("Ali", 19);
console.log(sentence);
