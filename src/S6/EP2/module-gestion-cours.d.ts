declare module "module-gestion-cours" {
    export function alerter(message: string) : void;
    export function logger(message: string) : void;

    export interface Etudiant {
        id : number,
        nom : string,
        niveau: NiveauCours
    }

    export enum NiveauDiplome {
        BTS,
        Licence,
        Bachelor,
        Master,
        Ingenieur,
    }

    export enum NiveauCours {
        Debutant,
        Intermediaire,
        Avance,
    }
     

    export interface Cours {
        code: string;
        titre: string;
        niveau: NiveauCours;
    }

    export interface Inscription {
        code_cours: string,
        id_etudiant: number
    }
    
    interface Professeur {
        id: number;
        nom: string;
        matiere: string;
    }


    export class GestionCours {
        private etudiants : Etudiant[]
        private cours : Cours[]
        private inscriptions : Inscription[]

        inscrireEtudiant(coursCode: string, etudiant: Etudiant) : void
        afficherInscriptions() : void
    }
}