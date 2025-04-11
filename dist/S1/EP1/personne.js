"use strict";
;
const afficherPersonne = (p) => {
    console.log("Bonjour " + p.nom + ". Tu as " + p.age + " ans.");
};
const personne1 = {
    id: 1,
    nom: "Alice",
    age: 25
};
afficherPersonne(personne1);
