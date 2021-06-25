"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var categories = ["A", "B", "C"];
var userCategory = rl.keyInSelect(categories, "¿Cual es tu categoria? ");
var membershipYears = rl.questionInt("¿Cuantos años de membresia tienes? ");
if (categories[userCategory] === "A" || (membershipYears >= 10 && membershipYears <= 20)) {
    console.log("Socio VIP");
}
