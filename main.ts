// example 1
let isRaining = true;

if (isRaining) {
    console.log("wear a raincoat");
}
else {
    console.log("wear a sunglasses")
}
// example 2

let weather = "Cloudy";

if (weather == "raining") {
    console.log("Wear a raincoat")
}
else if (weather == "Cloudy") {
    console.log("wear a light jacket")
}
else {
    console.log("wear a sunglasses")
}
//Conditional Ternary Operators
let isHungry = true;
let snack = isHungry ? "apple" : "water";
console.log(`you should have some ${snack}.`);

