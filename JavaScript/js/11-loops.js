'use strict';

// PĘTLA FOR
/*
for (let i=10 ; i>0 ; i--) {
    console.log(i);
}
*/
//PĘTLA forEach

let tablica = ["Krystian", "Monika", "Danuta"];

for (let i=0; i < tablica.length; ++i) {
    console.log(tablica[i]);
}

const iteruj = ( element, index ) => {
    console.log ( "Element z Indexem: " + index + " ma wartość "
    + element);
}

tablica.forEach(iteruj);


// PĘTLA for in

let person = {
    name: 'Krystian',
    age: 35
}

for(let key in person) {
    console.log(person[key]);
}


//PĘTLA for of

let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}


//PĘTLA while

let it = 0;
while (it < 10) {
    console.log(it);
    it++;
}


// Przerywanie pętli - break

let a = 0;
while (a < 10) {
    console.log(++a);
    
    if (a==7) {
        break;
    }
}


// Przeskakiwanie

for ( let b = 0; b <10; ++b ) {
    if(b==5) {
        continue;
    }
    else {
        console.log(b);
    }

    console.log("--");
}