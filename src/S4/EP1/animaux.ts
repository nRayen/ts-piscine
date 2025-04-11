export interface iAnimal {
    nom: string,
    seDeplacer(): void
}

export class Animal implements iAnimal {
    nom: string

    constructor (nom: string) {
        this.nom = nom
    }

    seDeplacer = () : void => {
        console.log(`L'animal ${this.nom} se déplace.`)
    }
}

const lion = new Animal("Mufasa")
const lionceau = new Animal("Simba")
lion.seDeplacer()
lionceau.seDeplacer()