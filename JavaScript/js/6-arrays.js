'use strict';

let imiona = ['Monika', 'Krystian', 'Łukasz'];

// Dodanie kolejnej wartości do tablicy
imiona[3] = 'Tania';

// Podmianka. 'Łukasz' na 'Ela'
imiona[2] = "Ela";

//Dodaje wartość na koniec tablicy; 
imiona.push('Edek');

//Dodaje wartość na początek tablicy;
console.log(imiona.unshift('Dawid'));

console.log(imiona);

//Usuwa pierwszą wartość z tablicy
console.log(imiona.shift());
console.log(imiona);


let imionaStr = imiona.join("-");
console.log(imionaStr);