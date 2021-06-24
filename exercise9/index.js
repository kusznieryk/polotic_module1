"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var num = Math.floor(rl.questionInt("ingresa un numero natural: "));
console.log(num + " " + (num % 2 === 0
    ? "es par"
    : "no es par"));
