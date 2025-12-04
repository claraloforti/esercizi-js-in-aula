/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const numUno = parseFloat(prompt("Inserisci un numero!"));
const numDue = parseFloat(prompt("Inserisci un altro numero!"));
let risultato = "";

if (numUno > numDue) {
    risultato = "Il numero maggiore è: " + numUno;
} else if (numDue > numUno) {
    risultato = "Il numero maggiore è: " + numDue;
} else {
    risultato = "I numeri inseriti sono uguali!";
}

document.getElementById("result").textContent = risultato;
