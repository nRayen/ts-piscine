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
declare const afficherPersonneAvancee: (p: Personne) => void;
declare const personne2: Personne;
declare const personne3: Personne;
declare const personne4: Personne;
