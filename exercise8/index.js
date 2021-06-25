"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var deg = rl.questionInt("¿Cual grado deseas calcular?");
var degRad = degToRad(deg);
var cos = Math.cos(degRad);
var sin = Math.sin(degRad);
console.log("El seno de " + deg + "\u00B0 es " + roundNumber(radToDeg(sin)) + " y su coseno es " + roundNumber(radToDeg(cos)));
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
;
function radToDeg(rad) {
    return rad / (Math.PI / 180);
}
;
function roundNumber(num) {
    var largerNum = num * 1000;
    var roundedNumber = Math.round(largerNum);
    return roundedNumber / 1000;
}
