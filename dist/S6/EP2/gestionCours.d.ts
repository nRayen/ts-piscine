interface Etudiant {
    id: number;
    nom: string;
    niveau: NiveauDiplome;
}
interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours;
}
declare enum NiveauCours {
    Debutant = "Debutant",
    Intermediaire = "Intermediaire",
    Avance = "Avance"
}
declare enum NiveauDiplome {
    BTS = "BTS",
    Licence = "Licence",
    Bachelor = "Bachelor",
    Master = "Master",
    Ingenieur = "Ingenieur"
}
declare class GestionCours {
    private etudiants;
    private cours;
    private inscriptions;
    constructor(cours: Cours[]);
    inscrireEtudiant(coursCode: string, etudiant: Etudiant): void;
    afficherInscriptions(): void;
}
export { GestionCours, Etudiant, Cours, NiveauDiplome, NiveauCours };
