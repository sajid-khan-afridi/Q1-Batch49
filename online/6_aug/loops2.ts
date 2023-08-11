
for(var i=0;i<5;i++){
    console.log("Hello",i); //body of loop
}
console.log(i);
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

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {//5 times
  for (var j = 0; j < lastNames.length; j++) {//4 times
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
console.log(fullNames)
