function pomnozi(niz) {
  return niz.reduce((pocetna, trenutna) => pocetna * trenutna);
}

nizz = [1, 2, 3];
console.log(pomnozi(nizz));

//Napraviti funkciju koja dodaje duzinu reci pored reci
//split ,join,map

nekiString = "Primer neke recenice bla bla";
function addLength(str) {
  return str.split(" ").map((x) => x + " " + x.length);
}

console.log(addLength(nekiString));

function setAlarm(zaposlen, odmor) {
  if (zaposlen && odmor) {
    return false;
  }
  if (!zaposlen && odmor) {
    return false;
  }
  if (!zaposlen && !odmor) {
    return false;
  }
  if (zaposlen && !odmor) {
    return true;
  }
}
setAlarm(true, false);
console.log(setAlarm(true, false));

console.log(Boolean("nesto"));

function wordReverse(str) {
  str = str.split("");
  if (str.length < 4) {
    return str.join("");
  } else {
    return str.reverse().join("");
  }
}

stringg = "Neki primer recenice";
console.log(wordReverse(stringg));
{
  //let,const,var
  let a = 5;
  console.log(a);
}
//var
//Ukloniti elemente odredjene iz niza
var nizElemenata = ["Neki", "Tamo", "Element"];
var Ukloniti = ["Tamo", "Neki"];
function UkloniElement(niz) {
  return niz.filter((x) => x != Ukloniti[0] && x != Ukloniti[1]).join(" ");
}
console.log(UkloniElement(nizElemenata));

//Za domaci ovaj zadatak preko slice i indexOf sa vise reci koje treba da se izbace

//2.zadatak:
const ucenici = [
  {
    ime: "Lejla",
    Bodovi: [99, 80, 75],
  },
  {
    ime: "Nejla",
    Bodovi: [90, 60, 20],
  },
  {
    ime: "Lajla",
    Bodovi: [60, 80, 50],
  },
  {
    ime: "Sara",
    Bodovi: [10, 80, 20],
  },
  {
    ime: "Mara",
    Bodovi: [9, 0, 3],
  },
  {
    ime: "Zara",
    Bodovi: [99, 80, 70],
  },
  {
    ime: "Hajra",
    Bodovi: [99, 99, 99],
  },
  {
    ime: "Sefketa",
    Bodovi: [99, 85, 95],
  },
  {
    ime: "Mulekelefeleketa",
    Bodovi: [100, 100, 100],
  },
];

function NajveciBrojBodova(Objekt) {
  let suma = 0;
  for (let i = 0; i < Objekt.length; i++) {
    if (Objekt[i].Bodovi.reduce((p, t) => p + t) / 3 > 90) {
      console.log(
        Objekt[i].ime,
        ",",
        Objekt[i].Bodovi.reduce((p, t) => p + t) / 3
      );
    }
  }
}
console.log("Ucenici sa visokim brojem bodova (preko 90)su:");
NajveciBrojBodova(ucenici);
/*
Scope - odredjuje pristupacnost, vidljivost promenljivih.
JavaScript ima 3 tipa scopa-a.

Block Scope
Function Scope
Global Scope

let i const su dve kljucne reci u pruzanju opsega. 
Promenljivama deklarisanim unutar {} bloka ne moze se pristupiti izvan bloka.
//BLOCK Scope
{
  let x=2;
}

console.log(x);

{
  var x=2;
}

console.log(x);

//Function scope
Promenljive deklarisane u okviru JavaScript funkcije, postaju Lokalne u funkciji.

Function myFunction(){
  let carName="Volvo";

  ovde mozemo koristi carName
}

ovde ne mozemo koristi  carName

LOkalne varijable imaju opseg funkcije: 
Njima se moze pristupiti samo iz funkcije. Lokalne promnljive se kreiraju 
kada se funkcija pokrene i brisu kada se funkcija zavrsi.

//Global Scope
varijable deklarisane izvan funkcija, postaju GLOBALNE


let carName="Volvo"

function myFunction(){
  console.log(carName);
}

-----------------------------------------------------------------------------------

Number Methods

toString() - Vraca broj kao string
toExponential() -Vraca broj napisan u eksponenijalnoj notaciji
toFixed() - Vraca broj napisan sa brojem decimala
toPrecision()-Vraca broj napisan odredjenom duzinom
valueOf() - vraca broj


(1).toString();

let x = 9.656;

x.toFixed(0)
x.toFixed(2)
x.toFixed(4)
x.toFixed(6)


x.toPrecision()
x.toPrecision(2)
x.toPrecision(4)
x.toPrecision(6)

------
Number(true)
Number(false)
Number("10")
Number("   10")
Number(" 10  ")
Number("10.33")
Number("10,33")
Number("10 33")
-----------------------------------------------------------------------------------

Math.round(4.4) - zaokruzi na najblizi ceo broj
Math.ceil(4.4) -  zaokruzi broj na visu vrednost
Math.floor(4.9) - zaokruzi broj na nizu vrednost
Math.sign(4) - vraca 1, ako je broj pozitivan, -1 ako je negativan ili 0
Math.sqrt(x) - vraca koren od x;
Math.pow(4,2) - vraca 4 na kvadrat
Math.abs(x) - vraca absolutnu vrednost od x
Math.min(0,150,30,20,-8,-200);
Math.max(0,150,30,20,-8,-200);
Math.random() - vraca random broj izmedju 0 i 1
Math.floor(Math.random() * 10); // vraca random broj od 0 do 9
-------------------------------------------------------------------------------------
//Dat je niz objekata koji predstavljaju grupu ucenika,
svaki sa imenom i nizom rezultata testa.
Izracunati prosecan rezultat testa za svakog ucenika, a zatim vratite niz objekata koji sadrze samo 
ucenike koji imaju prosecan rezultat iznad 90.
Input:

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 50] }
];

Rezultat:
[
  { name: 'David', average: 100 }

-----------------------------------------------------------
Napisati funkciju koja uzima listu stringova kao argument i vraca
filtriranu listu koja sadrzi iste elemente ali sa uklonjnim geese

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
npr. ako prosledimo niz
 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

 funckija treba da nam vrati 
 ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

------------------------------------------------------------------------*/
