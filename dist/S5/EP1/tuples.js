function creerScore(joueur, score) {
    return [joueur, score];
}
function afficherScore([nom, score]) {
    // let [nom,nombre] = score
    console.log(`Le joueur ${nom} a un score de ${score}`);
}
let scoreJ1 = creerScore("Rayen", 222);
afficherScore(scoreJ1);
export {};
