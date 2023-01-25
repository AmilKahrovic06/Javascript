//Napisati program koji ce izlistati propertie iz objekta

var student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
console.log(Object.keys(student));
console.log(Object.keys(student).join("-"));
console.log("------------------------");
//napraviti javascript funkciju koja vraca duzinu objekta

var kuca = {
  bojaKrova: "crvena",
  bojaFasade: "plava",
};

function DuzinaObjekta(nekiObj) {
  let asd = Object.keys(nekiObj);
  return asd.length;
}

console.log(DuzinaObjekta(kuca));
console.log("------------------------");

//Naci sumu svih pozitivnih brojeva u nizu
var nizBrojeva = [12, -3, 8, -7, 5];

function SumaPozitvnih(arr) {
  var niz2 = arr.filter((x) => x > 0);
  return niz2.reduce((pre, curr) => pre + curr, 0);
}

console.log(SumaPozitvnih(nizBrojeva));
console.log("------------------------");
//Uneti ime i prezime i vratiti samo inicijale.
var string = "Amil Kahrovic";

function Inicijali(str) {
  var ini = "";
  str.split(" ");
  ini = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      ini += str[i + 1];
    }
  }
  return ini;
}

console.log(Inicijali(string));

//II nacin

let imePrezime = "Moje ime";
function inicijali(stringg) {
  return stringg
    .split(" ")
    .map((el) => el[0])
    .join("");
}

console.log(inicijali(imePrezime));
console.log("------------------------");
//Napisati funkciju koja ispavlja veliko slovo
nizImena = ["lEjla", "ahMed", "aMin"];

function pravopis(arr) {
  return arr.map(
    (x) => x[0].toUpperCase() + x.slice(1, x.length).toLowerCase()
  );
}
console.log(pravopis(nizImena));

// napisati funkciju koja vraca da li je neka knjiga procitana
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Issaacsoon",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay",
    readingStatus: false,
  },
];

function JelProcitano(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].readingStatus) {
      console.log("Vec procitano", arr[i].author, "-", arr[i].title);
    } else {
      console.log("Morate procitati:", arr[i].author, "-", arr[i].title);
    }
  }
}

JelProcitano(library);

//nacini za for petlju
for (i = 0; i < 10; i++) {
  console.log("Neki niz");
}
for (let element in niz) {
  //indeks
  console.log(element);
}
for (let element of niz) {
  //element
  console.log(element);
}

let noviN = niz.forEach(Pomnozi);

function Pomnozi(el) {
  return el * 2;
}
