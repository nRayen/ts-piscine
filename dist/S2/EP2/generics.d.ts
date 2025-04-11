declare function premierElementNotEmpty<tableau extends {
    length: number;
}>(tableau: any[]): any;
declare const tab4: number[];
declare const tab5: string[];
declare const tab6: ({
    test: string;
    nom?: undefined;
    age?: undefined;
    azz?: undefined;
} | {
    nom: string;
    age: number;
    test?: undefined;
    azz?: undefined;
} | {
    azz: number;
    test?: undefined;
    nom?: undefined;
    age?: undefined;
})[];
