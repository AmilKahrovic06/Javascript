// Kreirati funkciju findMissingLetter koja kao argument dobija niz.
//  Potrebno je pronaci koje slovo je propusteno u nizu
// npr ["A","B","C","D","F"] => e
function findMissingLetter(arr) {
  let alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ";

  for (let i = 0; i < alphabet.length; i++) {
    if (arr[i] !== alphabet[i]) {
      return alphabet[i].toLowerCase();
    }
  }
}
let nizNeki = "ABCD";
console.log(findMissingLetter(nizNeki));
