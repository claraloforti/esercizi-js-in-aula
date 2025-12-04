/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const numUno = parseFloat(prompt("Inserisci un numero!"));
const numDue = parseFloat(prompt("Inserisci un altro numero!"));
const equalNum = "nessuno perchè numeri inseriti sono uguali!";
let risultato = "";

if (numUno > numDue) {
    risultato = numUno;
} else if (numDue > numUno) {
    risultato = numDue;
} else {
    risultato = equalNum;
}

document.getElementById("result").textContent = "Il numero maggiore è: " + risultato;