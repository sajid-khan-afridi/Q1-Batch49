"use strict";
// var i=0
// for(; i<5; ){
//     console.log("Hello",i); //body of loop
//     i++;
//   }
// console.log(i);
// for(exp1;exp2;exp3){
//     console.log("Hello");
// }
// expression operator oprand x+6
//exp1 once, before the loop start execute
//exp2 condition step1
//body of the loop step2
//exp3 increment i++ i=i+1 step3
//i=0 ---1 ---5
// for (var i = 0; i <= 4; i++) {
//   if ("Islamabad" === cleanestCities[i]) {
//     console.log("It's one of the cleanest cities");
//     break;
//   }
// }
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// for(let i=0; i<cleanestCities.length;i++){
//     console.log(cleanestCities[i])
//     for(let j=0;j<cleanestCities[i].length;j++){
//         console.log(cleanestCities[i].charAt(j))//one character at a time return
//     }
// }
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
//   console.log("It's one of the cleanest cities");//first
// }
// }
// if (matchFound === "no") {
//   console.log("It's not on the list");//second
// }
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++) {
    if ("Islamabad" === cleanestCities[i]) {
        matchFound = true;
        console.log("It's one of the cleanest cities");
        break;
    }
}
if (matchFound === false) {
    console.log("It's not on the list");
}
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) { //outer loop//5times
    for (var j = 0; j < lastNames.length; j++) { //inner loop//4times
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}
console.log(fullNames);
// i--0--1
// j--0
