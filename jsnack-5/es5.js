/*
Snack 5
 Crea un array vuoto. 
 Chiedi per 6 volte all’utente di inserire un numero, 
 se è dispari inseriscilo nell’array
*/


let numeri = [];
for (let i = 1; i <= 6; i++) {
    let num = parseInt(prompt("Inserisci il numero " + i));
    if (num % 2 !== 0) {
        numeri.push(num);
    }
}

document.getElementById("result").innerText = ("I numeri dispari sono: " + numeri);
