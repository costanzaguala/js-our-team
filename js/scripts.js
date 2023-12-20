/* 
Chiedere all'utente una parole
creare una funziona per capire se la parola e' palindroma
*/

const wordUser = prompt('Inserisci una parola');
console.log('wordUser', wordUser, typeof wordUser);

const worldResult = wordPalindrome(wordUser);

if (worldResult == true) {
    alert(' è Palindroma')
}

else {
    alert(' non è Palindroma')
}

// FUNZIONE

function wordPalindrome(word) {

let wordReverse = '';

for (let i = word.length - 1; i >= 0; i--) {

    wordReverse += word[i];
}

console.log ('wordReverse', wordReverse, typeof wordReverse);

if (word == wordReverse) {

    return true;
}

else {

    return false;

}

}