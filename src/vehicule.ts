interface Vehicule {
    marque : string,
    annee : number
}

const isVehicule = (obj: any) : obj is Vehicule => {
    if ("annee" in obj && "marque" in obj) {
        return true
    }
    return false
}

const afficherVehicule = (obj: any) : void => {
    isVehicule(obj) ? (
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`)
    ) : (
        console.log("Objet invalide pour un véhicule")
    )
}

const vehiculeValide = {
    marque: "Renault",
    annee: 2023
}
const personne = {
    nom: "Jean Marc",
    age: 12
}
const vehiculeInvalide = {
    marque: "Porsche",
    kilometrage: 19000
}
const rectangle = {
    longueur: 10,
    largeur: 23
}

afficherVehicule(personne)
afficherVehicule(vehiculeInvalide)
afficherVehicule(rectangle)
afficherVehicule(vehiculeValide)