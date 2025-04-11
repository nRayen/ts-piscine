export class Animal {
    constructor(nom) {
        this.seDeplacer = () => {
            console.log(`L'animal ${this.nom} se déplace.`);
        };
        this.nom = nom;
    }
}
const lion = new Animal("Mufasa");
const lionceau = new Animal("Simba");
lion.seDeplacer();
lionceau.seDeplacer();
