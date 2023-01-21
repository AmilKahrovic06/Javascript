// function NazivFunkcije() {
//   console.log("Ispisi nesto");
// }
// function niz(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// const arr = [10, 15, 34, 23];
// niz(arr);

// const saberiDvaBroja = (first, second) => first + second;
// function saberiDvaBroja(first, second) {
//   return first + second;
// }

// console.log(saberiDvaBroja());

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const newarr = array.map((x) => x ** 2);
console.log(newarr);

const newarr2 = array.filter((x) => x > 10);

console.log(newarr2);

const newarr3 = [1, 4, 1, 5, 4, 3, 7, 8];
uniqueArr = [];
//for
//includes
//push

// for (i = 0; i < newarr3.length; i++) {
//   if (uniqueArr.includes(newarr3[i])) {
//     continue;
//   } else {
//     uniqueArr.push(newarr3[i]);
//   }
// }
// console.log(uniqueArr);

function UniqueArray(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.includes(arr[i])) {
      continue;
    } else {
      uniqueArr.push(arr[i]);
    }
    return uniqueArr;
  }
}

console.log(UniqueArray(newarr3));

Arr = "AAABBBCCCDDDEEEFFFGGGGGGGGGGGGGGGGGG";

function Unique(Arr) {
  const uniqueArr = [];
  for (let i = 0; i < Arr.length; i++) {
    const stvar = Arr[i];
    if (uniqueArr.indexOf(stvar) === -1) {
      uniqueArr.push(stvar);
    }
  }
  return uniqueArr;
}

console.log(Unique(Arr));

//Domaci:Dat je niz brojeva.Proveriti da li je niz brojeva pivot.
//  Pivot je niz kojem je zbir brojeva sa desne i leve strane jednak
