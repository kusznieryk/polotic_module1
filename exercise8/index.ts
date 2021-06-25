import * as rl from "readline-sync";

let deg:number = rl.questionInt("¿Cual grado deseas calcular?")

let degRad = degToRad(deg)

let cos = Math.cos(degRad)
let sin = Math.sin(degRad)

console.log(`El seno de ${deg}° es ${roundNumber(radToDeg(sin))} y su coseno es ${roundNumber(radToDeg(cos))}`)

function degToRad(degrees:number):number{
    return degrees * (Math.PI / 180);
};

function radToDeg(rad:number):number {
    return rad / (Math.PI / 180);
};

function roundNumber(num:number):number {
    let largerNum:number = num*1000
    let roundedNumber = Math.round(largerNum)
    return roundedNumber/1000
}