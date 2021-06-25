"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var animals = ["Gato", "Perro"];
var perros = [];
var gatos = [];
for (var i = 0; i <= 30; i++) {
    var animalIndex = rl.keyInSelect(animals, "¿De que animal es la edad que vas a introducir?");
    var animal = animals[animalIndex];
    var animalAge = rl.questionInt("¿Que edad tiene el animal?");
    switch (animal) {
        case "Gato":
            gatos.push(animalAge);
            break;
        case "Perro":
            perros.push(animalAge);
        default:
            i--;
            break;
    }
}
console.log("El promedio de edad de los gatos es: " + calcAverageAge(gatos));
console.log("El promedio de edad de los perros es: " + calcAverageAge(perros));
function calcAverageAge(arr) {
    var average = 0;
    var amountOfAnimals = arr.length;
    arr.forEach(function (age) {
        average += age;
    });
    return average / amountOfAnimals;
}
