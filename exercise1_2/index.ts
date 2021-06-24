import * as rl from "readline-sync";

const formula: number = 2 * Math.PI;

let circum: number = rl.questionInt("¿Cual es la circunferencia del circulo? ")

while(circum<=0){
    circum = rl.questionInt("ERROR: el numero debe ser positivo y mayor a 0 ")
}
    console.log(`La circunferencia del circulo es: ${circum / formula}`)



