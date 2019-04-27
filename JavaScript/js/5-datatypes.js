'use strict';

// TYP LICZBOWY

let wyplata = 5000;
let premia = 2500;
let calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);
console.log(typeof calkowitaWyplata);


// TYP ŁAŃCUCH ZNAKÓW - STRING

let wyplataStr = "5000";
let premiaStr = "2500";
let calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);


// TYP LOGICZNY - BOOLEAN

let czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
}
else {
    console.log("Nie ma SMOGa");
}


//TYP SPECJALNE - UNDEFINED / NULL

let niezdefiniowanaZmienna;
let nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);


let nazwisko = "Kowalski";
let imieStudenta = `Michał ${nazwisko}`;
console.log(imieStudenta);