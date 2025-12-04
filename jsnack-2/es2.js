/*
JSnack 2
L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga;
*/

const word1 = (prompt("Inserisci una parola"));
const word2 = (prompt("Inserisci un'altra parola"));
let risultato;

if (word1.length < word2.length) {
    risultato = `La parola più lunga è ${word2}`;
} else if (word1.length > word2.length) {
    risultato = `La parola più lunga è ${word1}`;
} else {
    risultato = "Le lunghezze delle parole inserite sono uguali";
}

document.getElementById("result").innerText = risultato;

