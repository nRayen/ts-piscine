class Rectangle {
    private largeur : number
    private hauteur : number

    constructor (largeur: number, hauteur: number) {
        this.largeur = largeur
        this.hauteur = hauteur
    }

    public calculerSurface() : number {
        return this.largeur * this.hauteur
    }
}

class Cercle {
    private rayon : number

    constructor (rayon: number) {
        this.rayon = rayon
    }

    public calculerSurface() : number {
        return Math.PI * this.rayon * this.rayon
    }
}

function afficherSurface(forme: Rectangle | Cercle) {
    if (forme instanceof Rectangle) {
        return console.log(`Ceci est un rectangle de surface : ${forme.calculerSurface()}`);
    }

    if (forme instanceof Cercle) {
        return console.log(`Ceci est un cercle de rayon : ${forme.calculerSurface()}`);
    }
}

afficherSurface(new Rectangle(10,23))
afficherSurface(new Cercle(15))