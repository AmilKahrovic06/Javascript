let niz = [10, 15, 12, 15];

//pop-izbacuje zadnji element niza

let izb = niz.pop();

console.log(izb);

niz.push(20);

console.log(niz);

let str = "Nesto";

//lowercase -prebacivanje u mala i uppercase-prebacivanje u velika slova

console.log(str.toLowerCase());

console.log(str.toUpperCase());

//*concat-za sastavljanje dva niza/stringa

str1 = "Hello";
str2 = "abc";
let newstr = str1.concat(str2);

console.log(newstr);
//
arr1 = ["a", "b", "c"];
arr1 = ["d", "e", "f"];
let newarr = str1.concat(str2);

console.log(newarr);

//*trim-da uklonimo space sa pocetka i kraja stringa

const ex = "                       abcdefgh                         ";
console.log(ex.trim());

//*slice-da uzmemo deo nekog niza slice(start,end);     start uzima i prikazuje ,end ne prikazuje

const exslice = "Hello World";
console.log(exslice.slice(2, exslice.length));

//*substring -izdvaja karaktere i vraca novi string

const examplesubstring = "Neki text";
console.log(examplesubstring.substring(2, 4));

//*unshift()-dodaje novi element na pocetku niza

const unshift = [10, 15, 13, 12];
unshift.unshift(50);
console.log(unshift);

//*shift()-uklanja element na pocetku niza

shift = [1, 2, 3, 4, 5, 6, 7];
shift.shift();
console.log(shift);

//*includes()-proverava da li se neki element nalazi u nizu/stringu -vraca true ili false

const includess = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(includess.includes(7));

//*split() - string prebacuje u niz
const exampleSplit = "Danas je drugi cas";
console.log(exampleSplit.split(" "));
//*join()-   niz prebacuje u string

// const exampleJoin = "Danas je drugi cas";
// console.log(exampleJoin.join("-"));

//*replace-da zameni neki element
let examplereplace = "Ucimo da brojimo";
console.log(examplereplace.replace("da", "se"));

console.log(examplereplace.replaceAll("u", "N"));

//*map()-vraca ceo niz ali sa izmenama
const examplemap = [10, 20, 30, 40, 50];
const newExampleMap = examplemap.map((x) => x / 10);

// function pomnozi(x) {
//   return x * 2;
// }

for (i = 0; i < examplemap.length; i++) {
  examplemap[i] * 2;
}
console.log(newExampleMap);

const examplemap1 = [1, 2, 3, 4, 5];
const newExampleMap1 = examplemap.map((x) => x * 2);

//sort()-da sortira
let newA = [5, 3, 6, 3, 7, 3];
newA.sort();
console.log(newA);

//*reverse -zameni mesta clanovima niza

let examplereverse = [1, 65, 3, 6, 3, 53, 4];
examplereverse.reverse();
console.log(examplereverse);

//*charAt() da prikaze karakter na trazenoj poziciji
let examplecharAt = "Hello World";
console.log(examplecharAt.charAt(5));

//*filter()-da filtrira neki niz/da vrati elemente niza koji prodju test
let exampleFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(exampleFilter.filter((x) => x % 2 === 0));

//indexof()-vraca index trazenog elementa
console.log(exampleFilter.indexof(7));
// map
// reduce
//4 nacina za for petlju

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
