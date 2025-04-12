enum Direction2 {
    Nord,
    Sud,
    Est,
    Ouest
}

type Coordonnees = [number,number]

function vecteurDirection2 (direction: Direction2) : Coordonnees {
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
            return [0,0]
    }
}

function seDeplacer(point : Coordonnees, direction: Direction2) : Coordonnees {
    let [dx,dy] : Coordonnees = vecteurDirection2(direction)
    let [x,y] = point

    return [x+dx, y+dy]
}

let point : Coordonnees = [5,6]
point = seDeplacer(point, Direction2.Nord)
point = seDeplacer(point, Direction2.Est)
point = seDeplacer(point, Direction2.Est)
point = seDeplacer(point, Direction2.Nord)

console.log(`Le point arrive aux coordonnées : [${point}]`)