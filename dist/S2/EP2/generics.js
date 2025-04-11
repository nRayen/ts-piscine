"use strict";
function premierElementNotEmpty(tableau) {
    if (tableau.length < 1)
        return undefined;
    return tableau[0];
}
const tab4 = [1, 43, 32];
const tab5 = ["sdqsd", "DSQC", "DSQC"];
const tab6 = [{ test: "dqsldl" }, { nom: 'DSQDD', age: 23 }, { azz: 3 }];
console.log(premierElementNotEmpty(tab4));
console.log(premierElementNotEmpty(tab5));
console.log(premierElementNotEmpty(tab6));
console.log(premierElementNotEmpty([]));
