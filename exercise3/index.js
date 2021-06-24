"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var num1 = rl.questionInt("ingresa un numero: ");
var num2 = rl.questionInt("ingresa el otro numero: ");
if (num1 > num2)
    console.log(num1 + " es mayor que " + num2);
if (num2 > num1)
    console.log(num2 + " es mayor que " + num1);
