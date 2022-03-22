const età1 = prompt('Inserisci l età della prima persona');
const età2 = prompt('Inserisci l età della seconda persona');

if (età1 > età2) {
    alert('La prima persona ha più anni della seconda');
} else if (età1 < età2) {
    alert('La seconda persona ha più anni della prima');
} else if (età1 === età2) {
    alert('Le due persone hanno la stessa età');
} else {
    alert('Non hai inserito valori corretti');
}