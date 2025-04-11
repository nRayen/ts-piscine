interface Adresse {
    rue: string;
    ville: string;
}
interface Personne {
    readonly id: number;
    nom: string;
    age: number;
    adresse?: Adresse;
}
declare const afficherPersonne: (p: Personne) => void;
declare const afficherPersonneAvancee: (p: Personne) => void;
declare const personne1: Personne;
declare const personne2: Personne;
declare const personne3: Personne;
