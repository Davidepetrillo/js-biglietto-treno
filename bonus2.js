const primaScelta = prompt("scegli pari o dispari");
primaScelta = primaScelta.toLowerCase();
primaScelta = primaScelta.replace(" ", "");


if (primaScelta == "pari") {
    const secondaSceltaPari = prompt("Inserisci un numero pari compreso tra 1 e 9 che intendi giocare");
    if (secondaSceltaPari % 2 != 0) {
        alert('La prego di scegliere un numero pari');
    } else if (secondaSceltaPari %2 == 0) {
    const randInt = Math.floor(Math.random()*10);
    if ( randInt %2 == 0) {
        alert('Hai vinto questo round');
    } else {
        alert('Hai perso questo round');
    }
}
}

else if (primaScelta == "dispari") {
    const secondaSceltaDispari = prompt("Inserisci un numero dispari compreso tra 1 e 9 che intendi giocare");
    if (secondaSceltaDispari % 2 == 0) {
        alert('La prego di scegliere un numero dispari');
} else if (secondaSceltaDispari %2 == 0) {
    const randInt2 = Math.floor(Math.random()*10);
    if ( randInt2 %2 == 0) {
        alert('Hai vinto questo round');
    } else {
        alert('Hai perso questo round');
    }
}
}