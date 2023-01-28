// n = 10;
// while (n > 0) {
//   console.log(n);
//   n--;
// }
// console.log("---------------------------");
// n = 0;
// while (n <= 10) {
//   console.log(n);
//   n++;
// }
n = 1;
do {
  console.log(n);
  n++;
} while (n < 10);
//slice
function daLiJeParan(str) {
  if (str.length % 2 == 0) {
    return (
      str.slice(0, str.length / 2) + "|" + str.slice(str.length / 2, str.length)
    );
  } else {
    return (
      str.slice(0, str.length / 2) +
      "|" +
      str.slice(str.length / 2 + 1, str.length)
    );
  }
}
string = "abcde";
console.log(daLiJeParan(string));
//split
stringg = "HELLO WORLD";
function zameniCrticu(str, sep) {
  return str.split("").join(sep);
}
console.log(zameniCrticu(stringg), ",");

let o = 5;
let proizvod = 1;
brojac = 0;
//Izracunati faktorijel broja 5

function factorijel(n) {
  let proizvod = 1;
  while (o > 0) {
    proizvod *= o;
    o--;
  }
  return proizvod;
}
console.log(factorijel(5));

//Izracunati sumu parnih brojeva od 1-20
function SumaBrojeva() {
  g = 2;
  suma = 0;
  while (g > 0) {
    suma += g;
    g--;
  }
  return suma;
}
console.log(SumaBrojeva());

let niz = [1, 2, 3, 4, 5, 6];
niz.reduce((prethodna, trenutna) => prethodna + trenutna, "");
console.log(niz.reduce((prethodna, trenutna) => prethodna + trenutna, ""));
console.log("------------------------");
function Animal(Obj) {
  return "This " + Obj.color + " " + Obj.name + " has " + Obj.legs + " legs";
}
Doggie = {
  name: "Dog",
  legs: 4,
  color: "brown",
};
console.log(Animal(Doggie));
