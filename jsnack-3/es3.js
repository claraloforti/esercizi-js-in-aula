/*
JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
 */

 
//Con For

let somma = 0;
for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt("Inserisci il numero " + i));
    somma += num;
}

document.getElementById("result").innerText = ("La somma dei 5 numeri inseriti è: " + somma);


//Con While
/*
let somma = 0;
let i = 1;

while (i <= 5) {
    let num = parseFloat(prompt("Inserisci il numero " + i))
    somma += num;
    i++;
}
    
document.getElementById("result").innerText = ("La somma dei 5 numeri inseriti è: " + somma);
*/

