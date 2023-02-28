//Klauzeri/closures
function add() {
  let counter = 0;
  return function () {
    counter++;
  };
}
let brojac = add();
brojac();
brojac();
brojac();
let noviBrojac = add();
noviBrojac();

// IIEF
(function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

function izracunaj(x) {
  function pomnozi(y) {
    return x * y;
  }
  return pomnozi;
}
let rezultat = izracunaj(10);
rezultat(5);
