'use strict';

//powinno się używać zmiennych lokalnych wewnątrz funkcji, a nie globalnie


let kontoLukasza = 1000000;

const zrobZakupy = (zaIle) => {
    let kontoNatalii = 2000000;

    let ileZostaloNaKoncie = kontoNatalii - zaIle;

    return ileZostaloNaKoncie;
}

console.log(zrobZakupy(500000));