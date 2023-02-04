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
