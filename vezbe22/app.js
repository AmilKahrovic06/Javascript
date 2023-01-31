// Kreirati funkciju findMissingLetter koja kao argument dobija niz.
//  Potrebno je pronaci koje slovo je propusteno u nizu
// npr ["A","B","C","D","F"] => e
/*function findMissingLetter(arr) {
  let alpha = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  alphabet = alpha.split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (arr[i] !== alphabet[i]) {
      return alphabet[i].toLowerCase();
    }
  }
}
let nizNeki = ["A", "B", "C", "D"];
console.log(findMissingLetter(nizNeki));
console.log("--------------------");*/
//Napraviti funkciju u kojoj ime zameni prezime

function zameni(Str) {
  let zamena = Str.split(" ");
  let prezime = zamena[0];
  let ime = zamena[1];
  imePrezime = ime + " " + prezime;
  return imePrezime;
}
let nekoime = "Amil Kahrovic";
console.log(zameni(nekoime));

//II nacin

// function ReverseName(str) {
//   return str.split(" ").reverse().join("");
// }

function findMissingLetter(array) {
  let abeceda = "abcdefghijklmoprstuvwyz";
  let abec =
    array[0] === array[0].toUpperCase()
      ? abeceda.toUpperCase()
      : abeceda.toLowerCase();
  let findfirst = abec.indexOf(array[0]);
  for (let i = 0; i < array.length; i++) {
    if (abec[findfirst + i] !== array[i]) {
      return abec[findfirst + i];
    }
  }
}
console.log(findMissingLetter(["B", "C"]));

//split,map,join

function skratiRec(recenica) {
  return recenica
    .split(" ")
    .map((x) => (x.length > 4 ? x[0] + [x.length - 2] + x[x.length - 1] : x))
    .join(" ");
}
nekaRecenica = "Neka tamo recenica";

console.log(skratiRec(nekaRecenica));

const input = [
  {
    Name: "Jane",
    Age: 25,
  },
  {
    Name: "John",
    Age: 30,
  },
  {
    Name: "John",
    Age: 35,
  },
  {
    Name: "Baba Stana",
    Age: 97,
  },
];

function najveceNajmanjeGodine(nekiElement) {
  let max = 0;
  let min = input[0].Age;
  for (let i = 0; i < nekiElement.length; i++) {
    if (nekiElement[i].Age > max) {
      max = nekiElement[i].Age;
    }
    if (nekiElement[i].Age < min) {
      min = nekiElement[i].Age;
    }
  }
  return "minimum: " + min + "     maximum:" + max;
}
console.log(najveceNajmanjeGodine(input));

//Vratiti neki broj u obliku telefonskog broja
let broj = 123456789;
function phoneNumber(niz) {
  let format = "(xxx) xxx-xxx";
  for (let i = 0; i < niz.length; i++) {
    format = format.replace("x", niz[i]);
  }
  return format;
}
console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
