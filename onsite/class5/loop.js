"use strict";
// for(exp1;exp2;exp3){
//body of the loop
// }
//x+y
// for(var i=0;i<5;){
//     console.log("hello",i)
//     ++i;
// }
// console.log("after the loop=",i)
//exp1 once before the loop starts
//exp2 condition i.e. true or false --step1
//body of the loop --step2
//exp3 i++ -- i=i+1 step3
//i--0--1--2
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// for (var i = 0; i <= 4; i++) {
//   if ("Islamabad" === cleanestCities[i]) {
//     console.log("It's one of the cleanest cities");
//     break;
//   }
// }
// console.log(i)
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// var matchFound = "no";
// for (var i = 0; i <= 4; i++){
// if ("Islambad" === cleanestCities[i]) {
//   matchFound = "yes";
//   console.log("It's one of the cleanest cities");
// }
// }
// if (matchFound === "no") {
//   console.log("It's not on the list");
// }
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}
console.log(fullNames);
//i--0--1 j--0
