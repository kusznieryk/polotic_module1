import * as rl from "readline-sync";

const num:number = Math.floor(rl.questionInt("ingresa un numero natural: "))

console.log(`${num} ${
    num%2===0
        ?"es par"
        :"no es par"
    }`)