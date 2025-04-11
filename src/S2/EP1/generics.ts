function premierElement(tableau : any[]) {
    return tableau[0]
}

const tab1 = [1,43,32]
const tab2 = ["sdqsd","DSQC","DSQC"]
const tab3 = [{test: "dqsldl"},{nom: 'DSQDD', age: 23},{azz:3}]


console.log(premierElement(tab1))
console.log(premierElement(tab2))
console.log(premierElement(tab3))