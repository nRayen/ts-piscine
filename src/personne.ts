interface Personne {
    nom: string,
    age: number
};

const afficherPersonne = (p: Personne) => {
    console.log("Bonjour " + p.nom + ". Tu as " + p.age + " ans.")
}

const personne1 : Personne = {
    nom: "Alice",
    age: 25
}

afficherPersonne(personne1)