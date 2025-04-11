interface Employe {
    nom: string;
    poste: string;
}
interface Client {
    nom: string;
    entreprise: string;
}
type PersonnePro = Employe | Client;
declare const afficherInfoProfessionnelle: (p: PersonnePro) => void;
declare const employe1: Employe;
declare const client1: Client;
