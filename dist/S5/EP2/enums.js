"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Nord"] = 0] = "Nord";
    Direction[Direction["Sud"] = 1] = "Sud";
    Direction[Direction["Est"] = 2] = "Est";
    Direction[Direction["Ouest"] = 3] = "Ouest";
})(Direction || (Direction = {}));
function vecteurDirection(direction) {
    switch (direction) {
        case 0: // Nord
            return [0, 1];
        case 1: // Sud
            return [0, -1];
        case 2: // Est
            return [1, 0];
        case 3: // Ouest
            return [-1, 0];
        default:
            return undefined;
    }
}
console.log("Les coordonnées au Nord sont : " + vecteurDirection(Direction.Nord));
console.log("Les coordonnées à Sud sont : " + vecteurDirection(Direction.Sud));
console.log("Les coordonnées à l'Est sont : " + vecteurDirection(Direction.Est));
console.log("Les coordonnées à l'Ouest sont : " + vecteurDirection(Direction.Ouest));
