const domanda1 = parseFloat(prompt('Quanti chilometri hai intenzione di percorrere?'));
const domanda2 = parseInt(prompt('Qual è la tua età?'));
const priceTicket = 0.21;
const priceTicketUnder = (priceTicket - ((priceTicket * 20)/100));
const priceTicketOver = (priceTicket - ((priceTicket * 40)/100));
const prezzoFinale = domanda1 * priceTicket;
const prezzoArrotondato = Math.round((prezzoFinale + Number.EPSILON) * 100) / 100;
const prezzoFinaleUnder = domanda1 * priceTicketUnder;
const prezzoArrotondatoUnder = Math.round((prezzoFinaleUnder + Number.EPSILON) * 100) / 100;
const prezzoFinaleOver = domanda1 * priceTicketOver;
const prezzoArrotondatoOver = Math.round((prezzoFinaleOver + Number.EPSILON) * 100) / 100;


if (domanda2 < 18) {

    const rispostaOver = document.getElementById('price').innerHTML =`Il prezzo finale del biglietto è ${prezzoArrotondatoUnder}€ `;

}

else if (domanda2 >= 65) {

    const rispostaOver = document.getElementById('price').innerHTML =`Il prezzo finale del biglietto è ${prezzoArrotondatoOver}€ `;
    
}

else if ((domanda2 >= 18 && domanda2 < 65)) {

    const risposta = document.getElementById('price').innerHTML =`Il prezzo finale del biglietto è ${prezzoArrotondato}€ `;

}

   

