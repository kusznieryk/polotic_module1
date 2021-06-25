import * as rl from "readline-sync"

const categories:Array<string>=["A","B","C"]

let userCategory = rl.keyInSelect(categories, "¿Cual es tu categoria? ")

let membershipYears = rl.questionInt("¿Cuantos años de membresia tienes? ")

if(categories[userCategory]==="A" || (membershipYears >=10 && membershipYears <= 20)){
    console.log("Socio VIP")
}