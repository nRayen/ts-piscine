function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}

const maVoiture = {
    marque: "Toyota",
    modele: "Yaris",
    annee: 2022
}

console.log(getProperty(maVoiture,"marque"))
console.log(getProperty(maVoiture,"annee"))