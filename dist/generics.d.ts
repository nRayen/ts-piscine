declare function premierElement<tableau extends {
    length: number;
}>(tableau: any[]): any;
declare const tab1: number[];
declare const tab2: string[];
declare const tab3: ({
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
declare function getProperty<T, K extends keyof T>(obj: T, key: K): T[K];
interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}
declare const maVoiture: {
    marque: string;
    modele: string;
    annee: number;
};
