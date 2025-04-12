declare abstract class Forme {
    abstract calculerSurface(): number;
}
declare class Rectangle2 extends Forme {
    private largeur;
    private hauteur;
    constructor(largeur: number, hauteur: number);
    calculerSurface(): number;
}
declare class Cercle2 extends Forme {
    private rayon;
    constructor(rayon: number);
    calculerSurface(): number;
}
