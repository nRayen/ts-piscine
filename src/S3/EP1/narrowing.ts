function traiterValeur (value: string | number) : number {
    if (typeof value == "string") {
        return value.length
    } else {
        return 2*value
    }
}

console.log(traiterValeur("Hello"))
console.log(traiterValeur(5))