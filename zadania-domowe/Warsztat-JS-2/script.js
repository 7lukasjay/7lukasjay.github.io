
let btnSubmit = document.querySelector("#formularz");

btnSubmit.addEventListener('click', (e) => {


    e.stopPropagation();
let imie = document.getElementsByName("fname")[0].value;
console.log(imie);
let nazwisko = document.getElementsByName("iname")[0].value;
console.log(nazwisko);

});