import * as rl from "readline-sync";

const animals:Array<string> = ["Gato","Perro"]

let perros:Array<number>=[]
let gatos:Array<number>=[]

for (let i = 0; i <= 30 ; i++) {
    const animalIndex:number = rl.keyInSelect(animals, 
        "¿De que animal es la edad que vas a introducir?"
        )
    const animal:string = animals[animalIndex]

    const animalAge = rl.questionInt("¿Que edad tiene el animal?")
    
    switch (animal) {
        case "Gato":
            gatos.push(animalAge)
            break;
        case"Perro":
            perros.push(animalAge)
        default:
            i--
            break;
    }
}

console.log("El promedio de edad de los gatos es: "+calcAverageAge(gatos))
console.log("El promedio de edad de los perros es: "+calcAverageAge(perros))


function calcAverageAge(arr:Array<number>) {
    let average:number= 0
    let amountOfAnimals:number = arr.length
    arr.forEach(age =>{
        average += age
    })  
    return average/amountOfAnimals
}