"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var num = Math.floor(rl.questionInt("ingresa un numero natural: "));
if (num >= 1 && num <= 12)
    console.log(num + " pertenece a la primer docena de numeros naturales");
else
    console.log(num + " no pertenece a la primer docena de numeros naturales");
