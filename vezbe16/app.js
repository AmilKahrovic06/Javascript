//Traziti od korisnika da unese neki realan broj,zatim ispisati kvadrat tog broj,
// obuhvatiti slucaj kada korisnik unese neki broj koji nije realan
// var a = Number(prompt("Unesite neki realan broj"));
// if (a >= 0) {
//   console.log(a ** 2);
// } else {
//   console.log("Ovo nije realan broj");
// }

// if (isNaN(a)) {
//   console.log("Ovo nije broj");
// }
// if (typeof a === "string") {
//   console.log("Ovo je neki string");
// }

// let recenica = "nakon danasnjeg testa itd itd";
// let novaRecenica = "";
// for (i = 0; i < recenica.length; i++) {
//   if (
//     recenica[i] == "a" ||
//     recenica[i] == "e" ||
//     recenica[i] == "i" ||
//     recenica[i] == "o" ||
//     recenica[i] == "u"
//   ) {
//     novaRecenica += recenica[i].toUpperCase();
//   } else {
//     novaRecenica += recenica[i];
//   }
// }
// console.log(novaRecenica + ".");

// x = Number(prompt("Unesite broj"));
// var Niz = [
//   "I love you",
//   "a little",
//   "a lot",
//   "passionately",
//   "madly",
//   "not at all",
// ];
// console.log(Niz[(x % Niz.length) - 1]);

// dan = Number(prompt("Unesite broj dana:"));
// const dani = [
//   "Ponedeljak",
//   "Utorak",
//   "Sreda",
//   "Cetvrtak",
//   "Petak",
//   "Subota",
//   "Nedelja",
// ];

// console.log(dani[dan - 1]);

// niz = [2, 2, 1];
// suma = 0;
// for (let i = 0; i < niz.length; i++) {
//   suma += niz[i] ** 2;
// }
// console.log("Suma svih brojeva je:", suma);

const nizLajkova = ["Tetka", "Majka", "Strina", "Nana", "Dedo"];

switch (nizLajkova.length) {
  case 1:
    console.log(nizLajkova[0], "se svidja vasa fotografija");
    break;

  case 2:
    console.log(
      nizLajkova[0],
      "i",
      nizLajkova[1],
      "se svidja vasa fotografija"
    );
    break;
  case 3:
    console.log(
      nizLajkova[0],
      ",",
      nizLajkova[1],
      "i",
      nizLajkova[2],
      "se svidja vasa fotografija"
    );
    break;
  default:
    console.log(
      nizLajkova[0],
      ",",
      nizLajkova[1],
      "i",
      nizLajkova.length - 2,
      "ostalih se svidja vasa fotografija"
    );
    break;
}
