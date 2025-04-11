"use strict";
class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        return console.log(`Ceci est un rectangle de surface : ${forme.calculerSurface()}`);
    }
    if (forme instanceof Cercle) {
        return console.log(`Ceci est un cercle de rayon : ${forme.calculerSurface()}`);
    }
}
afficherSurface(new Rectangle(10, 23));
afficherSurface(new Cercle(15));
