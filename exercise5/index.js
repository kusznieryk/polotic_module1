"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var num1 = Math.abs(rl.questionInt("ingresa un numero: "));
var num2 = Math.abs(rl.questionInt("ingresa el otro numero: "));
console.log("la suma entre " + num1 + " y " + num2 + " da como resultado " + (num1 + num2));
