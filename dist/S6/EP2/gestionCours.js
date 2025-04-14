import { alerter, logger } from "../EP1/mon-module/index.js";
var NiveauCours;
(function (NiveauCours) {
    NiveauCours["Debutant"] = "Debutant";
    NiveauCours["Intermediaire"] = "Intermediaire";
    NiveauCours["Avance"] = "Avance";
})(NiveauCours || (NiveauCours = {}));
var NiveauDiplome;
(function (NiveauDiplome) {
    NiveauDiplome["BTS"] = "BTS";
    NiveauDiplome["Licence"] = "Licence";
    NiveauDiplome["Bachelor"] = "Bachelor";
    NiveauDiplome["Master"] = "Master";
    NiveauDiplome["Ingenieur"] = "Ingenieur";
})(NiveauDiplome || (NiveauDiplome = {}));
// Rechercher si existe
function trouverElement(array, callback) {
    return array.find(callback) || false;
}
// Rechercher si existe v2
function findElement(array, field, search) {
    let found = array.find((element) => {
        if (element[field] === search) {
            return element;
        }
    });
    if (!found) {
        return false;
    }
    return found;
}
// Type Guard Etudiant
function isEtudiant(objet) {
    return typeof objet == "object"
        && "id" in objet
        && "nom" in objet
        && "niveau" in objet;
}
// Classe gestion
class GestionCours {
    constructor(cours) {
        this.etudiants = [];
        this.cours = [];
        this.inscriptions = [];
        this.cours = cours;
    }
    // Inscription étudiant
    inscrireEtudiant(coursCode, etudiant) {
        let cours = trouverElement(this.cours, (cours) => cours.code === coursCode);
        if (!cours) {
            return alerter(`Le code de cours ${coursCode} n'existe pas`);
        }
        if (!isEtudiant(etudiant)) {
            return alerter("L'objet passé n'est pas un étudiant valide");
        }
        this.etudiants.push(etudiant);
        this.inscriptions.push({ code_cours: cours.code, id_etudiant: etudiant.id });
    }
    // Affichage de toute les inscriptions
    afficherInscriptions() {
        if (this.inscriptions.length === 0) {
            return alerter("Il n'existe aucune inscriptions");
        }
        this.inscriptions.forEach((inscription) => {
            let etudiant = findElement(this.etudiants, "id", inscription.id_etudiant);
            let cours = findElement(this.cours, "code", inscription.code_cours);
            if (!etudiant || !cours)
                return alerter("Erreur lors de l'affichage de l'inscription");
            return logger(`L'étudiant ${etudiant.nom} en ${etudiant.niveau} est inscrit au niveau ${cours.niveau} au cours de ${cours.titre}`);
        });
    }
}
export { GestionCours, NiveauDiplome, NiveauCours };
