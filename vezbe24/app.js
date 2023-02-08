const person = {
  fistName: "Amil",
  lastName: "Kahrovic",
  age: 16,
  prikaziIme: function () {
    return this.fistName + " " + this.lastName;
  },
};

console.log(person.fistName);
console.log(person["fistName"]);
console.log(person.prikaziIme());

// Object.freeze(person);
// person.fistName = "NekiLik";
// console.log(person);

Object.seal(person);
person.fistName = "NekiLik";
console.log(person);
person.height = 180;
console.log(person);

// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};
myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
myCar.povecanjeBrzine = function (kolikoSePovecalaBrzina) {
  if (this.trenutnaBrzina + kolikoSePovecalaBrzina > this.maksimalnaBrzina) {
    return "Nije moguce povecati brzinu za datu vrednost ubrzanja";
  } else {
    return (this.trenutnaBrzina += kolikoSePovecalaBrzina);
  }
};
myCar.smanjenjeBrzine = function (kolikoSeSmanjilaBrzina) {
  if (this.trenutnaBrzina - kolikoSeSmanjilaBrzina < 0) {
    return "Nije moguce smanjiti brzinu za datu vrednost usporenja";
  } else {
    return (this.trenutnaBrzina -= kolikoSeSmanjilaBrzina);
  }
};
myCar.koci = function () {
  return (trenutnaBrzina = 0);
};
console.log(myCar);

console.log(myCar.povecanjeBrzine(200));
console.log(myCar);
console.log(myCar.smanjenjeBrzine(50));
console.log(myCar.koci());

// Napraviti objekat koji ima u sebi ime prezime jezik i dve metode  set language i set nickname koja se sastoji iz prva dva slova imena i prva dva slova prazimena

Osoba = {
  ime: "Amil",
  Prezime: "Kahrovic",
};
Osoba.Language = function (newLanguage) {
  this.Language = newLanguage;
};
Osoba.Nickname = function (Ime, Prezime) {
  return (
    Ime[0].toUpperCase() +
    Ime[1].toLowerCase() +
    Prezime[0].toLowerCase() +
    Prezime[1].toLowerCase()
  );
};

console.log(Osoba.Nickname("Amil", "Kahrovic"));
