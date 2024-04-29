// example 1
var isRaining = true;
if (isRaining) {
    console.log("wear a raincoat");
}
else {
    console.log("wear a sunglasses");
}
// example 2
var weather = "Cloudy";
if (weather == "raining") {
    console.log("Wear a raincoat");
}
else if (weather == "Cloudy") {
    console.log("wear a light jacket");
}
else {
    console.log("wear a sunglasses");
}
//Conditional Ternary Operators
var isHungry = true;
var snack = isHungry ? "apple" : "water";
console.log("you should have some ".concat(snack, "."));
