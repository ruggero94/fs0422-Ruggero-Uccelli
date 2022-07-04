//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);
/*
var pet = 'gatto';
var Pet = 'cane';

var petPreferito = 'criceto';
var PetPreferito = 'coniglio';


console.log($pet);

console.log(_pet);

document.write(_pet2);

//var 12 = 'numero';
*/

var $pet = 'giraffa';
var _pet = 'leone';
var _pet2 = 'pantera';
var bloccoTesto=document.getElementById('area-testo');


console.log(_pet);

function stampa(){



document.getElementById('area-testo').innerHTML += 'gli animali in questa area dello zoo sono: '+ ' '+ _pet + ',  '+ _pet2 + ' e ' + $pet;


}


