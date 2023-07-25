let country = prompt("Where do you live?")
// Number() function is used to convert the string to number
let age = Number(prompt("What's your age?"))

// Number("25");25

if (country === "pakistan") {
    if (age >= 18) {
        console.log("Here is your ticket")
    } else {
        console.error("Age restriction")
    }
} else {
    console.log("Invalid country")
}
