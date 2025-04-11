interface Personne {
    readonly id: number;
    nom: string;
    age: number;
}
declare const afficherPersonne: (p: Personne) => void;
declare const personne1: Personne;
