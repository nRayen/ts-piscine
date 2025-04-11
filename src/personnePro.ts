interface Employe {
    nom: string,
    poste: string
}

interface Client {
    nom: string,
    entreprise: string
}

type PersonnePro = Employe | Client

const afficherInfoProfessionnelle = (p: PersonnePro) => {
    "poste" in p ? (
        console.log(`Employé: ${p.nom} travaille comme ${p.poste}.`)
    ) : (
        console.log(`Employé: ${p.nom} est associé à l'entreprise ${p.entreprise}.`)
    )
}

const employe1 : Employe = {
    nom: "Alex",
    poste: "Larbin"
}

const client1 : Client = {
    nom: "Axel",
    entreprise: "SNCF"
}


afficherInfoProfessionnelle(employe1)
afficherInfoProfessionnelle(client1)
