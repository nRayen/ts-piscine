"use strict";
function premierElement(tableau) {
    if (tableau.length < 1)
        return undefined;
    return tableau[0];
}
const tab1 = [1, 43, 32];
const tab2 = ["sdqsd", "DSQC", "DSQC"];
const tab3 = [{ test: "dqsldl" }, { nom: 'DSQDD', age: 23 }, { azz: 3 }];
console.log(premierElement(tab1));
console.log(premierElement(tab2));
console.log(premierElement(tab3));
console.log(premierElement([]));
function getProperty(obj, key) {
    return obj[key];
}
const maVoiture = {
    marque: "Toyota",
    modele: "Yaris",
    annee: 2022
};
console.log(getProperty(maVoiture, "marque"));
console.log(getProperty(maVoiture, "annee"));
