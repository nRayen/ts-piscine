enum Direction {
    Nord,
    Sud,
    Est,
    Ouest
}

function vecteurDirection (direction: Direction) : [number,number] | undefined {
    switch (direction) {
        case 0: // Nord
            return [0,1]

        case 1: // Sud
            return [0,-1]
            
        case 2: // Est
            return [1,0]

        case 3: // Ouest
            return [-1,0]

        default:
            return undefined
    }
}

console.log("Les coordonnées au Nord sont : " + vecteurDirection(Direction.Nord))
console.log("Les coordonnées à Sud sont : " + vecteurDirection(Direction.Sud))
console.log("Les coordonnées à l'Est sont : " + vecteurDirection(Direction.Est))
console.log("Les coordonnées à l'Ouest sont : " + vecteurDirection(Direction.Ouest))