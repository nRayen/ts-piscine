function creerScore (joueur: string, score: number) : [string, number] {
    return [joueur,score]
}

function afficherScore([nom,score] : [string, number]) : void {
    // let [nom,nombre] = score
    console.log(`Le joueur ${nom} a un score de ${score}` );
}


let scoreJ1 = creerScore("Rayen", 222)
afficherScore(scoreJ1)