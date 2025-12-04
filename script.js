/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

/*
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
*/



/*
JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
 */

//Con FOR
/*let somma = 0;
for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt("Inserisci il numero " + i));
    somma += num;
}
console.log("La somma dei 5 numeri inseriti è: " + somma);
*/

//Con WHILE
/*
let somma = 0;
let i = 1;

while (i <= 5) {
    let num = parseFloat(prompt("Inserisci il numero " + i))
    somma += num;
    i++;
}
console.log("La somma dei 5 numeri inseriti è: " + somma);
*/



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
console.log("I numeri dispari sono: " , numeri);
