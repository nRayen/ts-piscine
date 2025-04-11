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
