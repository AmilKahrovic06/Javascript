// 12. zadatak
for (i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log(i, "-FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i, "- FIZZ");
  } else if (i % 5 == 0) {
    console.log(i, "- BUZZ");
  }
}
//13.zadatak
function isPalindrome(string) {
  debugger;
  string = string
    .toLowerCase()
    .split("")
    .filter((x) => x != " ");
  const string2 = string.reverse().join("");
  string = string.join("");
  console.log(string2, string);
  if (string == string2) {
    console.log("Ovo je palindrom");
  } else {
    console.log("Ovo nije palindrom");
  }
}
recenica = "Neka tamo recenica";
isPalindrome(recenica);

//14.zadatak
let kuca = {
  BojaKuce: "Zuta",
  BrojDrvaOkoKuce: 300,
};
//Procitajte vrednost iz objekta i ispisite
console.log(Object.values(kuca));
//Izmenite vrednosti iz objekta
kuca.BojaKuce = "Bela";
console.log(kuca.BojaKuce);
delete kuca.BrojDrvaOkoKuce;
console.log(Object.values(kuca));
