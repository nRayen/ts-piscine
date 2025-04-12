"use strict";
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Nord"] = 0] = "Nord";
    Direction2[Direction2["Sud"] = 1] = "Sud";
    Direction2[Direction2["Est"] = 2] = "Est";
    Direction2[Direction2["Ouest"] = 3] = "Ouest";
})(Direction2 || (Direction2 = {}));
function vecteurDirection2(direction) {
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
            return [0, 0];
    }
}
function seDeplacer(point, direction) {
    let [dx, dy] = vecteurDirection2(direction);
    let [x, y] = point;
    return [x + dx, y + dy];
}
let point = [5, 6];
point = seDeplacer(point, Direction2.Nord);
point = seDeplacer(point, Direction2.Est);
point = seDeplacer(point, Direction2.Est);
point = seDeplacer(point, Direction2.Nord);
console.log(`Le point arrive aux coordonnées : [${point}]`);
