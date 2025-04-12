abstract class Forme {
    abstract calculerSurface() : number  
}

class Rectangle2 extends Forme{
    private largeur : number
    private hauteur : number

    constructor(largeur: number, hauteur:number) {
        super()
        this.largeur = largeur
        this.hauteur = hauteur
    }

    calculerSurface(): number {
        return this.largeur * this.hauteur
    }
}


class Cercle2 extends Forme {
    private rayon : number

    constructor (rayon: number) {
        super()
        this.rayon = rayon
    }

    calculerSurface(): number {
        return this.rayon * this.rayon * Math.PI
    }
}

console.log(new Cercle2(12).calculerSurface())
console.log(new Rectangle2(12,34).calculerSurface())