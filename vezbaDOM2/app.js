let kocka = document.querySelector(".container");

let nizBoja = ["red", "blue", "green", "yellow", "tirquise", "purple"];
let brojac = 0;

function promeniboju() {
  //   brojac++;
  //   if (brojac > nizBoja.length) {
  //     brojac = 0;
  //     }
  let rendom = Math.floor(Math.random() * nizBoja.length + 1);
  kocka.style.backgroundColor = nizBoja[rendom];
}
