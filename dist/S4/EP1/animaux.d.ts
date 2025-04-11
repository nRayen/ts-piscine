export interface iAnimal {
    nom: string;
    seDeplacer(): void;
}
export declare class Animal implements iAnimal {
    nom: string;
    constructor(nom: string);
    seDeplacer: () => void;
}
