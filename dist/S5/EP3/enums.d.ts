declare enum Direction2 {
    Nord = 0,
    Sud = 1,
    Est = 2,
    Ouest = 3
}
type Coordonnees = [number, number];
declare function vecteurDirection2(direction: Direction2): Coordonnees;
declare function seDeplacer(point: Coordonnees, direction: Direction2): Coordonnees;
declare let point: Coordonnees;
