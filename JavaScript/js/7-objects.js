"use strict";

let kaja = {
    imie: "Kaja",
    wzrost: 160,
    przedstawOsobe() {
        console.log(this.imie);
    }
}


let krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja);


let monetaZl = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "złoto"
}

console.log(monetaZl);

class Osoba {
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;
    }

    wyswietlInfo() {
        console.log("Imię: " + this.imie + "\n" +
            "Nazwisko: " + this.nazwisko + "\n" +
            "Wzrost: " + this.wzrost + "\n" +
            "Oczy: " + this.oczy);
    }

}

let andrzej = new Osoba('Andrzej', 'Szymański', 177, 'niebieskie');
console.log(andrzej); 