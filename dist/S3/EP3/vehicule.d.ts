interface Vehicule {
    marque: string;
    annee: number;
}
declare const isVehicule: (obj: any) => obj is Vehicule;
declare const afficherVehicule: (obj: any) => void;
declare const vehiculeValide: {
    marque: string;
    annee: number;
};
declare const personne: {
    nom: string;
    age: number;
};
declare const vehiculeInvalide: {
    marque: string;
    kilometrage: number;
};
declare const rectangle: {
    longueur: number;
    largeur: number;
};
