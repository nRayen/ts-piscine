declare enum Direction {
    Nord = 0,
    Sud = 1,
    Est = 2,
    Ouest = 3
}
declare function vecteurDirection(direction: Direction): [number, number] | undefined;
