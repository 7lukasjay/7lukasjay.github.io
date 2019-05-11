//let paragrafy = $('p');
//console.log(paragrafy.text());

//*****ZMIEŃ TEKST PARAGRAFÓW NA TEN PODANY PONIŻEJ *****
//paragrafy.text('Nowy tekst paragrafów');


/*
let paragrafyByHtml = $('p');
//console.log(paragrafyByHtml.html());

//***** DODANIE <span> W PARAGRAFIE *****
paragrafyByHtml.html('<span>Treść z znacznika span</span>');
*/


let naglowek2 = $('#naglowek-2');
/*
naglowek2.prepend('Prependujemy treść | ');
naglowek2.append(' | Apendujemy treść');

naglowek2.before('Beforujemy treść | ');
naglowek2.after(' | Afterujemy treść');
*/


// *****WYCZYSZCZA ZAWARTOŚĆ LUB USUWA CAŁY ZNACZNIK***** 
//naglowek2.empty();
//naglowek2.remove();


// ***** PODMIEŃ h2 na h3 *****
/*
naglowek2.replaceWith('<h3> Test H3 </h3>'); //"outerHTML" in pure JS
*/


/*
// *****USTALANIE WARTOŚCI CSS DLA PARAGRAFOW*****
let paragrafy = $('p');
//paragrafy.css ('background-color', 'lightblue');

paragrafy.css ({
    'background-color': 'lightblue',
    'font-size': '2em',
    'color': 'gold'
});
*/


// *****DODAJ CLASS "red" do pierwszego z paragrafów (index 0) *****
/*
let pierwszyParagraf = $('.par').eq(0);
console.log(pierwszyParagraf);

pierwszyParagraf.addClass('red');
*/

$('input#input-1').val('Jan Kowalski');

$('input#input-1').change(function() {
    console.log($(this).val());
});

