import { Animal, iAnimal } from "../EP1/animaux.js";


class Chien extends Animal {
    seDeplacer = () => {
        console.log(`Le chien ${this.nom} court`)
    }
}


class Chat extends Animal {
    seDeplacer = () => {
        console.log(`Le chat ${this.nom} saute`)
    }
}

const faireSeDeplacer = (animaux: iAnimal[]) : void => {
    for (let animal of animaux) {
        animal.seDeplacer()
    }
}

const listeAnimaux = [
    new Chien("Krypto"),
    new Chat("TBag"),
    new Chien("Petit papa Noël"),
    new Chat("Boule de neige"),
]

faireSeDeplacer(listeAnimaux)