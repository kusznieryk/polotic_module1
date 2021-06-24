import * as rl from "readline-sync";

const num1:number = rl.questionInt("ingresa un numero: ")

const num2:number = rl.questionInt("ingresa el otro numero: ")

if (num1 > num2) console.log(`${num1} es mayor que ${num2}`)
if (num2> num1) console.log(`${num2} es mayor que ${num1}`)
if (num1 === num2) console.log(`${num1} y ${num2} son iguales`)