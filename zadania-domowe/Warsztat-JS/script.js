/* let zmienKolor = document.getElementById("par1");
zmienKolor.addEventListener("click", () => {
    zmienKolor.style.backgroundColor = "red";
}); */


let ustawTlo = document.querySelector("#kolorBtn");

ustawTlo.addEventListener('click', () => {
    let paragraf1 = document.querySelector("#par1");
    let paragraf2 = document.querySelector("#par2");
    
    paragraf1.style.backgroundColor = "red";
    paragraf2.style.backgroundColor = "yellow";
});
