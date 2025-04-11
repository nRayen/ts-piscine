declare class Rectangle {
    private largeur;
    private hauteur;
    constructor(largeur: number, hauteur: number);
    calculerSurface(): number;
}
declare class Cercle {
    private rayon;
    constructor(rayon: number);
    calculerSurface(): number;
}
declare function afficherSurface(forme: Rectangle | Cercle): void;
