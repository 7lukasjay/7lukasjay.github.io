'use strict';

let wzrostMateusz = 190;
let wzrostOlga = 190;

// Warunek if

if ( wzrostOlga < wzrostMateusz ) {
    console.log("Olga jest niższa :)");
}
else if (wzrostOlga == wzrostMateusz) {
    console.log('Olga jest tego samego wzrostu co Mateusz');
}
else {
    console.log("Olga jest niższa");
}

// Warunek switch

let kolor = 'czerwony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;  
    default:
        console.log('Inny kolor')  
}