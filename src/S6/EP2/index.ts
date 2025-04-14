import { logger } from "../EP1/mon-module/index.js";
import { Cours, Etudiant, GestionCours, NiveauCours, NiveauDiplome } from "./gestionCours.js";

let etudiants: Etudiant[] = [
    {
        id: 1,
        nom: "Jean",
        niveau: NiveauDiplome.Master
    },
    {
        id: 2,
        nom: "Marie",
        niveau: NiveauDiplome.BTS
    },
    {
        id: 3,
        nom: "Paul",
        niveau: NiveauDiplome.Licence
    },
    {
        id: 4,
        nom: "Mamadou",
        niveau: NiveauDiplome.Ingenieur
    }
];

let cours: Cours[] = [
    {
        code: "XC-001",
        titre: "Mathématiques",
        niveau: NiveauCours.Debutant
    },
    {
        code: "XC-002",
        titre: "Droit",
        niveau: NiveauCours.Avance
    },
    {
        code: "XC-003",
        titre: "Développement",
        niveau: NiveauCours.Intermediaire
    },
    {
        code: "XC-004",
        titre: "Systèmes et réseaux",
        niveau: NiveauCours.Debutant
    }
];

const gestionCours = new GestionCours(cours)

gestionCours.inscrireEtudiant("XC-001", etudiants[0])
gestionCours.inscrireEtudiant("XC-002", etudiants[1])
gestionCours.inscrireEtudiant("XC-003", etudiants[2])
gestionCours.inscrireEtudiant("XC-004", etudiants[3])

gestionCours.inscrireEtudiant("XC-001", etudiants[3])
gestionCours.inscrireEtudiant("XC-002", etudiants[2])
gestionCours.inscrireEtudiant("XC-003", etudiants[1])
gestionCours.inscrireEtudiant("XC-004", etudiants[0])

// Cours inexistants
logger("Cours inexistant")
gestionCours.inscrireEtudiant("XC-005", etudiants[0])
gestionCours.inscrireEtudiant("XC-006", etudiants[0])
gestionCours.inscrireEtudiant("XC-006", etudiants[0])
logger("-------------------------------------")


gestionCours.afficherInscriptions()

