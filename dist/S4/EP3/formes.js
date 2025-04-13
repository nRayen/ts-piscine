class Forme {
}
class Rectangle2 extends Forme {
    constructor(largeur, hauteur) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle2 extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return this.rayon * this.rayon * Math.PI;
    }
}
console.log(new Cercle2(12).calculerSurface());
console.log(new Rectangle2(12, 34).calculerSurface());
export {};
