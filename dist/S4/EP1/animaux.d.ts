interface iAnimal {
    nom: string;
    seDeplacer(): void;
}
declare class Animal implements iAnimal {
    nom: string;
    constructor(nom: string);
    seDeplacer: () => void;
}
declare const lion: Animal;
declare const lionceau: Animal;
