"use strict";
;
const afficherPersonneAvancee = (p) => {
    if (p.adresse) {
        console.log(`Bonjour, je m'appelle ${p.nom} (ID: ${p.id}), j'ai ${p.age} ans et j'habite au ${p.adresse.rue}, ${p.adresse.ville}.`);
    }
    else {
        console.log(`Bonjour, je m'appelle ${p.nom} (ID: ${p.id}) et j'ai ${p.age} ans.`);
    }
};
const personne2 = {
    id: 1,
    nom: "Alice",
    age: 25
};
const personne3 = {
    id: 2,
    nom: "Jean",
    age: 34,
    adresse: {
        rue: "16 avenue du Maréchal",
        ville: "Los Santos"
    }
};
const personne4 = {
    id: 3,
    nom: "Marie",
    age: 18
};
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
afficherPersonneAvancee(personne4);
