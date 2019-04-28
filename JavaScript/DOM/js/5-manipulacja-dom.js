'use strict';

let mainHeader = document.getElementById('header'); // Przypisujemy nagłówek strony do zmiennej.
console.log(mainHeader.innerHTML);
console.log(mainHeader.innerText);
console.log(mainHeader.outerHTML);


mainHeader.setAttribute("class", "header");
mainHeader.className = "nowa-klasa";
console.log(mainHeader.outerHTML);

//Wyświetl klasy
let klasy = mainHeader.className;
console.log(klasy);


//mainHeader.classList.toggle("active");

let zmienKolor = document.getElementById("toggle");
zmienKolor.addEventListener("click", () => {
    zmienKolor.classList.toggle("active");
});

zmienKolor.style.backgroundColor = "lime";