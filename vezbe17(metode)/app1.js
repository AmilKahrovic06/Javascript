// Domaci nadji najduzu rec u stringu
const sentence = "Ovo je neki primer recenice";
let longestWord = "";

const words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}

console.log(longestWord); // "recenice"
