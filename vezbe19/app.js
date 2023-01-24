// //There is a bus moving in the city which takes and drops some people at each bus stop.

// // You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// // Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// // Take a look on the test cases.

// // Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// // The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

// function busRiders(stops) {
//   let riders = 0;
//   for (let i = 0; i < stops.length; i++) {
//     riders += stops[i][0] - stops[i][1];
//   }
//   return riders;
// }

// console.log(
//   "Zao nam je,",
//   busRiders([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//     [10, 2],
//     [3, 2],
//     [2, 1],
//     [0, 0],
//   ]),
//   "vas mora izaci ;-("
// );
// console.log("-------------------------------------------------");
// // Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

// // These dots at the end also add to the string length.

// // So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

// // If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

// // e.g. trim("He", 1) should return "H..."

// // If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// // e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"
// function skrati(str, maxDuzina) {
//   if (str.length <= maxDuzina) return str;
//   if (maxDuzina <= 3) return str.slice(0, maxDuzina) + "...";
//   return str.slice(0, maxDuzina - 3) + "...";
// }
// console.log(skrati("Kreiranje kata je zabavno", 14)); // Output: "Kreiranje ka..."
// console.log(skrati("On", 1)); // Output: "O..."
// console.log(skrati("Code Vars je prilično rad", 50)); // Output: "Code Vars je prilično rad"
// console.log(skrati("", 10)); // Output: ""
// console.log("-------------------------------------------------");

//Dat je niz brojeva. Proveriti da li je dati niz pivot.Pivot je niz gde je suma svih brojeva sa leve strane jednak zbiru brojeva sa desne.
// function proveriPivot(niz) {
//   let levaSuma = 0;
//   let desnaSuma = 0;

//   for (let i = 1; i < niz.length; i++) {
//     levaSuma += niz[i - 1];
//     desnaSuma = 0;

//     for (let j = i + 1; j < niz.length; j++) {
//       desnaSuma += niz[j];
//     }

//     if (levaSuma === desnaSuma) {
//       console.log("Ovaj niz je pivot");
//       return true;
//     }
//   }

//   console.log("Nije pivot");
//   return false;
// }

// let arr = [1, 2, 3, 4, 6];

// proveriPivot(arr);
// console.log("-------------------------------------------------");

//OBJEKTI//

const osoba = {
  ime: "Amel",
  prezime: "Kahrovic",
  ImePrezime: function () {
    return this.ime + " " + this.prezime;
  },
  age: 50,
  punoletan: function () {
    if (this.age < 18) {
      return "NE";
    }
    return "DA";
  },
};
console.log(osoba.ImePrezime());
console.log(osoba.prezime);
console.log(osoba.punoletan());

console.log(osoba["ime"]);

osoba.ime = "QWERTY";
osoba["ime"] = "Lejla";
console.log(osoba.ime);
// delete osoba.ime;
console.log(osoba);

console.log(Object.keys(osoba));
console.log(Object.values(osoba));
osoba.visina = "170";
console.log(osoba);
const auto = {
  proizvodjac: "BMW",
  godina: 1964,
  cena: "1999 e",
  boja: "black",
};
console.log(Object.keys(auto));
console.log(Object.values(auto));

delete auto.boja;
console.log(Object.values(auto));

let niz = [1, 2, 3];

let suma = niz.reduce((prethodno, trenutno) => prethodno + trenutno * 2, 0);
console.log(suma);

//pomocu map funkcije
let mapp = niz.map((trenutno) => trenutno * 2);
console.log(mapp);
let sumaSaMap = niz
  .map((x) => x * 2)
  .filter((x) => x < 5)
  .reduce((prethodni, trenutno) => prethodni + trenutno, 0);

console.log(sumaSaMap);

//imamo niz imena ,traziti ime(index imena)

nizImena = ["neki Tamo Lik", "QWERTY", "Lejla"];

function Trazenje(niz) {
  if (niz.indexOf("Lejla" === -1)) {
    return "sad ce lejla doci";
  }
  return indexOf("Lejla");
}

console.log(Trazenje(nizImena));

const NekiNizImena = ["Nejla", "Lejla", "Ahmed", "Anes", "Lejla", "Nejla"];
console.log(Trazenje(nizImena));
const NekiNizImena2 = new Set(NekiNizImena);
console.log(NekiNizImena2);
