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
var Ukloniti = "Tamo";
function UkloniElement(niz) {
  return niz.filter((x) => x != Ukloniti);
}
console.log(UkloniElement(nizElemenata));

//Za domaci ovaj zadatak preko slice i indexOf sa vise reci koje treba da se izbace

//2.zadatak:
