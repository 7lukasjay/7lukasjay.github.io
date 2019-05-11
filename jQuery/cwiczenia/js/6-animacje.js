
// ***** Animacja schowaj nagłówek, zanikający nagłówek 2  ******
/*
$('#naglowek-1').hide('slow').show('slow');

$('#naglowek-2').fadeOut('slow').fadeIn('slow')

$('#naglowek-2').slideUp('slow').slideDown('slow');
*/




function przesunNaSrodek() {
    $('#naglowek-1').delay(1500).animate({
        'margin-left': '500px',
        'font-size': '4em'
    }, 3000, przesunWLewo);
};

function przesunWLewo() {
    $('#naglowek-1').animate({
        'margin-left': '0px',
        'font-size': '36px'
    }, 3000, przesunNaSrodek);
}

przesunNaSrodek();