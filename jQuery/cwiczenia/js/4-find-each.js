// ***** W body metodą .find znajdź wszystkie klasy "par2" i zmień jego treść oraz kolor *****
$('body')
.find('.par2')
.text('Tekst zmieniony w metodzie find()')
.css('color', 'red');


let par2 = $('.par2');

// jQuery
par2.each(function(index, biezacyParagraf) {
    if (index === 0) {
        //biezacyParagraf.style.color = 'green'   - Sposób w czystym JS
        $(biezacyParagraf)
            .css('color', 'green')
            .text('Tekst zmieniony w metodzie each()')
    } else if (index === 1) {
        $(biezacyParagraf)
            .css('color', 'blue')
            .text('Tekst zmieniony w metodzie each()') 
    } else if (index === 2) {
        $(biezacyParagraf)  
            .css('color', 'yellow')
            .text('Tekst zmieniony w metodzie each()') 
    }
});

//JS in ES6
/*
[1, 2, 3].forEach((element, index) => {

});
*/