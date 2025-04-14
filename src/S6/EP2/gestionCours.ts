import { alerter, logger } from "../EP1/mon-module/index.js";

// Interfaces données
interface Etudiant {
    id: number;
    nom: string;
    niveau: NiveauDiplome;
}

interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours; // Utilisation d'un enum
}

interface Inscription {
    code_cours: string,
    id_etudiant: number
}

interface Professeur {
    id: number;
    nom: string;
    matiere: string;
}

enum NiveauCours {
    Debutant = "Debutant",
    Intermediaire = "Intermediaire",
    Avance = "Avance",
}

enum NiveauDiplome {
    BTS = "BTS",
    Licence = "Licence",
    Bachelor = "Bachelor",
    Master = "Master",
    Ingenieur = "Ingenieur",
}


// Rechercher si existe
function trouverElement<T,U> (array:T[], callback: (element : T) => boolean ) : T | false {
    return array.find(callback) || false
}

// Rechercher si existe v2
function findElement<T, U extends keyof T>(array: T[], field:U, search: T[U]) : T | false {
    let found = array.find((element: T) => {
        if(element[field] === search) {
            return element
        }
    })

    if(!found) {
        return false
    }

    return found
}

// Type Guard Etudiant
function isEtudiant (objet: Etudiant) : objet is Etudiant {
    return typeof objet == "object"
        && "id" in objet
        && "nom" in objet
        && "niveau" in objet
}

// Classe gestion
class GestionCours {
    private etudiants : Etudiant[] = []
    private cours : Cours[] = []
    private inscriptions : Inscription[] = []

    constructor (cours: Cours[]) {
        this.cours = cours
    }


    // Inscription étudiant
    inscrireEtudiant(coursCode: string, etudiant: Etudiant) : void {
        
        let cours = trouverElement(this.cours, (cours) => cours.code === coursCode)
        if (!cours) {
            return alerter(`Le code de cours ${coursCode} n'existe pas`)
        }

        if(!isEtudiant(etudiant)) {
            return alerter("L'objet passé n'est pas un étudiant valide")
        }

        this.etudiants.push(etudiant)
        this.inscriptions.push({code_cours: cours.code, id_etudiant: etudiant.id})      
    }


    // Affichage de toute les inscriptions
    afficherInscriptions() : void {
        if (this.inscriptions.length === 0) {
            return alerter("Il n'existe aucune inscriptions")
        }

        this.inscriptions.forEach((inscription) => {
            let etudiant = findElement(this.etudiants,"id", inscription.id_etudiant) 
            let cours = findElement(this.cours,"code", inscription.code_cours)
            
            if(!etudiant || !cours) return alerter("Erreur lors de l'affichage de l'inscription")

            return logger(`L'étudiant ${etudiant.nom} en ${etudiant.niveau} est inscrit au niveau ${cours.niveau} au cours de ${cours.titre}`)
        })

    }
}

export {GestionCours, Etudiant, Cours, NiveauDiplome, NiveauCours}