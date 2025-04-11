"use strict";
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
