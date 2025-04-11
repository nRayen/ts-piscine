"use strict";
const afficherInfoProfessionnelle = (p) => {
    "poste" in p ? (console.log(`Employé: ${p.nom} travaille comme ${p.poste}.`)) : (console.log(`Employé: ${p.nom} est associé à l'entreprise ${p.entreprise}.`));
};
const employe1 = {
    nom: "Alex",
    poste: "Larbin"
};
const client1 = {
    nom: "Axel",
    entreprise: "SNCF"
};
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
