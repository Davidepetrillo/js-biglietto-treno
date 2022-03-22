
const primaScelta = prompt("scegli pari o dispari");
const sceltaGiocatore = prompt('Inserisci un numero compreso tra 1 e 9 che intendi giocare');
const scelta1 = parseInt(sceltaGiocatore)
console.log(scelta1)
const sceltaComputer = Math.floor(Math.random()*10);
const scelta2 = parseInt(sceltaComputer)
console.log (scelta2)
const somma = scelta1 + scelta2;
console.log(somma);

if ((primaScelta == "pari") && (somma % 2 == 0)) {
    alert('Hai vinto questo round');
} else if ((primaScelta == "pari") && (somma % 2 != 0)) {
    alert('Hai perso questo round');
} else if ((primaScelta == "dispari") && (somma % 2 == 0)) {
    alert('Hai perso questo round');
} else if ((primaScelta == "dispari") && (somma % 2 != 0)) {
    alert('Hai vinto questo round');
}