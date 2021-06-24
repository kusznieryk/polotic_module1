"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var formula = 2 * Math.PI;
var circum = rl.questionInt("¿Cual es la circunferencia del circulo? ");
while (circum <= 0) {
    circum = rl.questionInt("ERROR: el numero debe ser positivo y mayor a 0 ");
}
console.log("La circunferencia del circulo es: " + circum / formula);
