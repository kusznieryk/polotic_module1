import * as rl from "readline-sync";

const num1:number = Math.abs(rl.questionInt("ingresa un numero: "))

const num2:number = Math.abs(rl.questionInt("ingresa el otro numero: "))

console.log(`la suma entre ${num1} y ${num2} da como resultado ${num1 + num2}`)