'use strict';
/*

let parSecond = document.querySelector("#parSecond");
console.log(parSecond);

// To działa tylko jak wpisze się w tym divie HTML uruchomienie funkcji onclick
const klikAlert = () => {
    alert("kliknięto Diva :)");
}


// Ten sposób nie wymaga ingerencji w HTML
//parSecond.onclick = klikAlert;


// Najczęściej spotykany sposób na wywołanie funkci
//parSecond.addEventListener('click', klikAlert);


// Funkcja anonimowa
parSecond.addEventListener('click', () => {
    alert('funkcja anonimowa CLICK')
});

*/

let parSecond = document.querySelector("#parSecond");
console.log(parSecond);

let parWParSecond = document.getElementById("parWParSecond");
console.log(parWParSecond);

const klikDiv = (e) => {
    console.log("Kliknięto Div");
}

const klikParagraf = (e) => {
    e.stopPropagation();
    console.log("Kliknięto PARAGRAF");
}

parSecond.addEventListener("click", klikDiv);
parWParSecond.addEventListener("click", klikParagraf);